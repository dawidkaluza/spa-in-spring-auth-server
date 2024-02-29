# SPA in Spring Auth Server

This project shows how login SPA page can be implemented in Spring Authorization Server.

Want to test it out?
1. Clone the project.
2. Run service (cd service; ./gradlew bootRun)
3. Run web (cd web; npm start)
4. Prepare OAuth2 authorization request, open it in a browser and go through the whole flow. (Login to auth server via l:admin p:admin)

OAuth2 authorization request example: http://localhost:8080/oauth2/authorize?response_type=code&client_id=webapp&state=1234xyz&code_challenge=MMRGwBwWyq4DLBuYbwPHRF6HGyVnN_UAUDnQ8GVGjn8&code_challenge_method=S256