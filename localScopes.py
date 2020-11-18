# Local Scopes cannot use Variables in Other Local Scopes

def spam():
    eggs = 99
    bacon()
    print(eggs)

def bacon():
    ham = 101
    eggs = 0

spam()
