package routes

import (
	httpHandler "hacktivCapstone/internal/delivery/http"
	"github.com/gin-gonic/gin"
)

func SetupRouter(r *gin.Engine) {
	// Daftar semua route di sini
	r.POST("/register", httpHandler.RegisterHandler)
	r.POST("/login", httpHandler.LoginHandler)
}
