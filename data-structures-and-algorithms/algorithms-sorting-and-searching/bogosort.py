import random

def is_sorted(items):
    """Return a boolean indicating whether given items are in sorted order.
    Running time: O(n) because we have to iterate through the entire list
    Memory usage: O(1) because we are not creating any new variables"""
    for i in range(len(items) - 1):
        if items[i] > items[i + 1]:
            return False
    return True

def bogo_sort(items):
    """Sort given items by repeatedly shuffling list until sorted.
    Running time: O(n * n!) because we have to iterate through the entire list and shuffle until sorted
    Memory usage: O(1) because we are not creating any new variables"""
    attempts = 0
    while not is_sorted(items):
        print(attempts)
        random.shuffle(items)
        attempts += 1
    return items

print(bogo_sort([2, 1, 5, 3, 4, 6, 7, 8, 9, 10]))