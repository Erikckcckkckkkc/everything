import turtle as t
import random
r = lambda: random.randint(0,255)
t.speed(0)
for g in range(500):
    t.color('#0000%02X' % (r()))
    for h in range(7):
        t.right(random.random()*180)
        t.forward(10 + (h * 20))
        t.left(random.random()*180)
        t.forward(10 + (h * 20))
    t.penup()
    t.setposition(0, 0)
    t.pendown()
    t.right(1)
