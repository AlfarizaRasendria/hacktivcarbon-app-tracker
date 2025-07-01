package entities

import "github.com/google/uuid"

type User struct {
	ID       uuid.UUID `json:"id"`
	Fullname string    `json:"fullname"`
	Username string    `json:"username"`
	Email    string    `json:"email"`
	Password string    `json:"password"`
}

type LoginUser struct {
	ID       uuid.UUID `json:"id"`
	Email    string    `json:"email"`
	Password string    `json:"password"`
}
