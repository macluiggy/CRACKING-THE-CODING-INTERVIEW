class Node:
    """
    An object for storing a single node of a linked list.
    Models two attributes - data and the link to the next node in the list.
    """

    data = None
    next = None

    def __init__(self, data):
        self.data = data

    def __repr__(self):
        return "<Node data: %s>" % self.data


class LinkedList:

    """
    Singly linked list
    """

    def __init__(self):
        self.head = None

    def is_empty(self):
        """
        Check if the linked list is empty
        """
        return self.head == None
    
    def size(self):
        """
        Returns the number of nodes in the linked list
        Takes O(n) time
        """
        current = self.head
        count = 0
        
        while current:
            count += 1
            current = current.next
        
        return count
    
    def add(self, data):
        """
        Adds new Node containing data at head of the list
        Takes O(1) time
        """
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node

    def __repr__(self) -> str:
        """
        Returns a string representation of the list
        Takes O(n) time
        """
        nodes = []
        current = self.head

        while current:
            if current is self.head:
                nodes.append("[Head: %s]" % current.data)
            elif current.next is None:
                nodes.append("[Tail: %s]" % current.data)
            else:
                nodes.append("[%s]" % current.data)
            
            current = current.next
        
        return "-> ".join(nodes)
    
    def search(self, key):
        """
        Search for the first node containing data that matches the key
        Return the node or None if not found
        Takes O(n) time
        """
        current = self.head

        while current:
            if current.data == key:
                return current
            else:
                current = current.next
        
        return None
    
    def insert(self, data, index):
        """
        Inserts a new Node containing data at index position
        Insertion takes O(1) time but finding the node at the insertion point takes O(n) time
        Takes overall O(n) time
        """
        if index == 0:
            self.add(data)
        
        if index > 0:
            new = Node(data)
            position = index
            current = self.head

            while position > 1:
                current = current.next
                position -= 1
            
            prev = current
            next = current.next

            prev.next = new
            new.next = next
    
    def remove(self, key):
        """
        Removes Node containing data that matches the key
        Returns the node or None if key doesn't exist
        Takes O(n) time
        """
        current = self.head
        previous = None
        found = False

        while current and not found:
            if current.data == key and current is self.head:
                found = True
                self.head = current.next
            elif current.data == key:
                found = True
                previous.next = current.next
            else:
                previous = current
                current = current.next
        
        return current
    
    def node_at_index(self, index):
        """
        Returns the Node at specified index
        Takes O(n) time
        """
        if index == 0:
            return self.head
        
        current = self.head
        position = 0

        while position < index:
            current = current.next
            position += 1
        
        return current

# N1 = Node(10)
# print(N1.__repr__())
# N2 = Node(20)
# N1.next = N2
# print(N1.next.__repr__())
# exit()
# l = LinkedList()
# l.add(10)
# l.add(20)
# l.add(30)
# # l.add({'name': 'John'})
# # print(l.size())
# # print(l.__repr__())
# print(l.search(20))
# print(l.search(50))
# # print(l)
# l.insert(15, 2)
# print(l)
# print(l.remove(20))
# print(l)