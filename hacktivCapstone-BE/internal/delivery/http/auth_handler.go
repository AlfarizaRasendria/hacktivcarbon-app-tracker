package http

import (
	"fmt"
	"hacktivCapstone/internal/entities"
	"hacktivCapstone/internal/usecases"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
)

func RegisterHandler(c *gin.Context) {
	var req entities.User
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid input"})
		return
	}

	err := usecases.RegisterUser(req)
	if err != nil {
		log.Println("🔥 Gagal register:", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Register failed"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Register success"})
}


func LoginHandler(c *gin.Context) {
	var req entities.User

	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Input tidak valid"})
		return
	}

	fmt.Println("🔍 Email input:", req.Email)
	fmt.Println("🔍 Password input (hashed/plain):", req.Password)

	if req.Email == "" || req.Password == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Email dan password wajib diisi"})
		return
	}

	user, err := usecases.LoginUser(req.Email, req.Password)
	if err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"message": "Login berhasil",
		"user": gin.H{
			"email":    user.Email,
			"password":    user.Password,
		},
	})
}

