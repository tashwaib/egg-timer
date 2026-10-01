#egg-boil timer as my first project 
import time
def egg_boil_timer(seconds):
      remaining=seconds
      while remaining>0:
       minutes=remaining//60
       seconds=remaining%60
       print(f"{minutes:02}:{seconds:02}", end="\r")
       time.sleep(1)
       remaining-=1  
def ask_to_continue():
       again_choice=input("do you want another timer:")     
       if again_choice=="yes":
            return True
       elif again_choice=="no":
            return False
       else:
            print("please enter yes or no:")
            return ask_to_continue()   
while True:
    print("1.soft")
    print("2.medium")
    print("3.hard")
    print("4.quit")
    user_choice=int(input("enter your choice"))
    if user_choice==1:
        seconds=5*60
    elif user_choice==2:
        seconds=7*60
    elif user_choice==3:
         seconds=10*60
    elif user_choice==4:
        print("thanks for using my app. have a good day")
        break  
    else:
      print("invalid choice .please choose from menu")
      continue
    egg_boil_timer(seconds)
    print("\ntimer is done!")
    if ask_to_continue()==False:
        print("thanks for using my app.have a good day")
        break    