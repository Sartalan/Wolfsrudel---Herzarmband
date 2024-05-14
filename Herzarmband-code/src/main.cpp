#include <Arduino.h>
#define LED 2

void setup()
{
  pinMode(LED, OUTPUT);
  Serial.begin(115200);
}

void loop()
{
  digitalWrite(LED, HIGH);
  delay(1000);
  digitalWrite(LED, LOW);
  Serial.println("SE APAGÓ :D");
  delay(1000);
}
