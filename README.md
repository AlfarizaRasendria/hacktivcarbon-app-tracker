# AlfarizaRasendria-hacktivcarbon-app-tracker

Hacktiv Carbon App Tracker is a Website based apps that provides a fully functional system for user authentication and CO₂ emission estimation based on several parameters like Electricity, Flights, Shipping, Vehicles, and Fuel Combustion fetching from Third Party API.

Technology Used while developing this project such as : 
1. Front End : The user interface is built using ReactJS for
 its dynamic, component-based structure
 & Chart.JS for Diagram Visualization, and
 styled with Bootstrap to ensure a
 consistent, responsive design and fast UI
 development using pre-built components
2. Backend : On the server side, the application is powered by Golang (Go), a highly performant and scalable programming language
3. Database : For Data Storage and management, this project utilizes PostgreeSQL hosted on the Supabase Server
4. Deployment : On the deployment side, the
 application is deployed on a
 Virtual Private Server provided
 by BiznetCloud, ensuring high
 performance and scalability. Besides that, tunelling is also used using ngrok because the protocol that is provided by Virtual Private Server is HTTP which means unsecure protocol for sending and receiving data, so Ngrok provided static domain then in virtual private server, we have to configure it (tunelling) and the protocol will be an Https.   



**Installation**
# Clone Repository
git clone https://github.com/username/nama-proyek.git

**Access into Front End Project Folder**
cd hacktivCapstone-FE
search up for .env file then fill in VITE_CARBON_API_KEY as yours and initiate VITE_BACKEND_URL=http://localhost:8080

**Access into BackEnd Project Folder**
cd hacktivCapstone-BE
search up for .env file then fill in SUPABASE_URL, SUPABASE_API_KEY, ProjectRef, and set up GIN_MODE=release as yours

**Access Terminal and switch to Front End Directory**
cd .\hacktivCapstone-FE\

**Run Vite**
npm run dev

**Open New Terminal and switch into Backend Directory**
cd .\hacktivCapstone-BE\

**Run Golang as Backend Service**
go run main.go


🧑‍💻 Contributor
M. Alfariza Rasendria 
u can Reach me on my social media : 
Instagram - @alfariza123123
Email - rasendria.alfariza18@gmail.com

📄 License
This project is licensed under the MIT License.
