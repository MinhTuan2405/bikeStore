from queue import PriorityQueue
import time


def time_decorator (func):
    def wrapper (*args, **kwargs):
        startTime = time.time ()
        func (*args, *kwargs)
        endTime = time.time ()
        totalTime = endTime - startTime
        print ('this function runs in: ', totalTime)
    
    return wrapper


@time_decorator
def cal_sum (a):
    sum = 0
    for i in range (1, a):
        sum += i
    print ('sum is: ', sum)
    return sum

cal_sum (10)



def print_array (array):
    for el in array:
        print (el, end=" ")

print_array ([1, 3, 4, 5, 6,6])