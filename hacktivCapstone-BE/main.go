package main

import (
	"hacktivCapstone/configs"
	httpDelivery "hacktivCapstone/internal/routes"
	"log"
	"github.com/gin-contrib/cors"
	"os"
	"github.com/gin-gonic/gin"
)

func main() {
	configs.InitSupabase()
	if configs.SupaClient == nil {
		log.Fatalln("❌ Supabase client belum diinisialisasi. Keluar aplikasi.")
	} else {
		log.Println("✅ Supabase client siap digunakan")
	}

	r := gin.Default()
	
	r.Use(cors.Default())
	httpDelivery.SetupRouter(r)

	port := os.Getenv("PORT")
	if port == ""{
		port = "8080"
	}

	log.Printf("🚀 Server jalan di port %s...\n", port)
	r.Run(":" + port)
}
