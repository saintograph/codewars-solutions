def add(a, b):
    return a + b
def is_triangle(a, b, c):
    if add(a, b) <= c:
        return False
    if add(a, c) <= b:
        return False
    if add(c, b) <= a:
        return False
    return True