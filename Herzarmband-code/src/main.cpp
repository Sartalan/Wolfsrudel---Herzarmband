#include <Arduino.h>
#include <ArduinoWebsockets.h>
#include <WiFi.h>

//TP-LINK_3C90
//yBxwCV3AryoFqJ8RHfYU

const char* ssid = "Estudiantes"; //Enter SSID
const char* password = "educar_2018"; //Enter Password

using namespace websockets;

WebsocketsServer server;
void setup() {
  Serial.begin(115200);
  // Connect to wifi
  WiFi.begin(ssid, password);

  // Wait some time to connect to wifi
  for(int i = 0; i < 15 && WiFi.status() != WL_CONNECTED; i++) {
      Serial.print(".");
      delay(1000);
  }
  
  Serial.println("");
  Serial.println("WiFi connected");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());   //You can get IP address assigned to ESP

  server.listen(80);
  Serial.print("Is server live? ");
  Serial.println(server.available());
}

void loop() {
  WebsocketsClient client = server.accept();
  if(client.available()) {
    WebsocketsMessage msg = client.readBlocking();

    // log
    Serial.print("Got Message: ");
    Serial.println(msg.data());

    // return echo
    // client.send("Echo: " + msg.data());
    delay(1000);

    if (msg.data() == "fc"){

      for(int i = 1; i <= 10; i++) {
      String numeroStr = String(i);
      client.send(numeroStr);
      }
    }

    
  }
  
  delay(1000);
}