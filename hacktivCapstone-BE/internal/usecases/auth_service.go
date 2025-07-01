package usecases

import (
	"fmt"
	/* "gorm.io/gorm" */
	"hacktivCapstone/internal/entities"
	"hacktivCapstone/internal/repository"
	/* "hacktivCapstone/internal/utils" */
	"golang.org/x/crypto/bcrypt"
)

func RegisterUser(user entities.User) error {
	hashed, _ := bcrypt.GenerateFromPassword([]byte(user.Password), bcrypt.DefaultCost)
	user.Password = string(hashed)

	return repository.CreateUser(user)
}

func LoginUser(email, password string) (*entities.LoginUser, error) {
	user, err := repository.LoginUser(email, password)
	if err != nil {
		return nil, err
	}

	err = bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(password))
	if err != nil {
		return nil, fmt.Errorf("❌ Password salah")
	}

	return user, nil
}
