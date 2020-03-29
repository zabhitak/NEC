#include <ESP8266WiFi.h>
#include <FirebaseArduino.h>
// Set these to run example.
#define FIREBASE_HOST "techmania20202.firebaseio.com"
#define FIREBASE_AUTH "B0Ooxfsw7rlIT4rSnIIZ3FhSiASaqa4SxVutTpVS"
#define WIFI_SSID "Realme 1"
#define WIFI_PASSWORD "12345678"
void setup() {
Serial.begin(9600);
pinMode(D1, OUTPUT);
pinMode(D2, OUTPUT);
pinMode(D4, OUTPUT);
pinMode(D5, OUTPUT);
// connect to wifi.
WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
Serial.print("connecting");
while (WiFi.status() != WL_CONNECTED) {
Serial.print(".");
delay(500);
}
Serial.println();
Serial.print("connected: ");
Serial.println(WiFi.localIP());
Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
Firebase.set("", 0);
Firebase.set("Ammonia/Valve_1", 0);
Firebase.set("Carbon/Valve_2", 0);

}
int n = 0;
int j=0;
void loop() {
// get value
n = Firebase.getInt("Ammonia/Valve_1");
j = Firebase.getInt("Carbon/Valve_2");
// handle error
if (n==1) {
Serial.println("Valve 1");
  
digitalWrite(D2,HIGH);  
delay(8000);
digitalWrite(D2,LOW); 
return;
}

if(j==1) {
Serial.println("Valve 2");
digitalWrite(D4,HIGH);  

delay(5000);
digitalWrite(D4,LOW); 
delay(25000);
return;
}
}
