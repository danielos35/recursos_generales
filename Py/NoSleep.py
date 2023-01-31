import keyboard
import pyautogui
import sys
import time

i = 0
while(i < 10000):
    pyautogui.moveTo(900,263,0.2)
    pyautogui.moveTo(900,150,0.2)
    pyautogui.moveTo(900,263,0.2)
    pyautogui.moveTo(900,150,0.2)
    pyautogui.moveTo(900,263,0.2)
    pyautogui.moveTo(900,150,0.2)
    time.sleep(30)
    i=i+1
    print(i)