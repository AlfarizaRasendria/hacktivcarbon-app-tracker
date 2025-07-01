package configs

import (
	"fmt"
	"os"

	"github.com/joho/godotenv"
	"github.com/nedpals/supabase-go"
)

var SupaClient *supabase.Client

func InitSupabase() {
	err := godotenv.Load()
	if err != nil {
		fmt.Println("❌ Gagal load .env:", err)
		return
	}

	url := os.Getenv("SUPABASE_URL")
	apiKey := os.Getenv("SUPABASE_API_KEY")

	fmt.Println("🔍 SUPABASE_URL terisi:", url != "")
	fmt.Println("🔍 SUPABASE_API_KEY terisi:", apiKey != "")

	if url == "" || apiKey == "" {
		fmt.Println("❌ SUPABASE_URL atau SUPABASE_API_KEY belum di-set di .env")
		return
	}

	SupaClient = supabase.CreateClient(url, apiKey)

	if SupaClient == nil {
		fmt.Println("❌ Supabase client gagal dibuat (CreateClient return nil)")
	} else {
		fmt.Println("✅ Supabase client berhasil diinisialisasi")
	}
}

