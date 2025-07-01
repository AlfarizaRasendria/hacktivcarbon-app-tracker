package repository

import (
	// "errors"
	"fmt"
	"hacktivCapstone/configs"
	"hacktivCapstone/internal/entities"

	"github.com/google/uuid"
	// "golang.org/x/crypto/bcrypt"
)

func CreateUser(user entities.User) error {
	if configs.SupaClient == nil {
		return fmt.Errorf("❌ Supabase client belum diinisialisasi")
	}

	fmt.Println("🔍 Supabase client ready, inserting user...")

	// Generate UUID untuk ID
	newID := uuid.New()

	insertPayload := map[string]interface{}{
		"id":       newID, // ✅ pakai uuid.New()
		"fullname": user.Fullname,
		"username": user.Username,
		"email":    user.Email,
		"password": user.Password,
	}

	var inserted []entities.User

	err := configs.SupaClient.
		DB.
		From("users").
		Insert(insertPayload).
		Execute(&inserted)

	if err != nil {
		return fmt.Errorf("❌ Gagal insert user: %v", err)
	}

	fmt.Println("✅ User berhasil ditambahkan:", inserted)
	return nil
}

func LoginUser(email, password string) (*entities.LoginUser, error) {
	if configs.SupaClient == nil {
		return nil, fmt.Errorf("❌ Supabase client belum diinisialisasi")
	}

	var users []entities.LoginUser

	err := configs.SupaClient.
		DB.
		From("users").
		Select("*").
		Limit(1).
		Filter("email", "eq", email).
		Execute(&users)

	fmt.Println("🕵️‍♂️ Mencari user dengan email (ILike):", email)
	fmt.Printf("📦 users result: %+v\n", users)
	fmt.Printf("❗️err: %v\n", err)

	if err != nil {
		return nil, fmt.Errorf("❌ Gagal query user: %v", err)
	}

	if len(users) == 0 {
		return nil, fmt.Errorf("❌ User tidak ditemukan")
	}

	return &users[0], nil
}
