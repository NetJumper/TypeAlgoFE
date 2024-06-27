// src/data/DataStructures.ts
type DataStructuresType = {
  [key: string]: {
    name: string;
    parts: { [key: string]: string[] };
  };
};

export const dataStructures: DataStructuresType = {
  linkedList: {
    name: 'Linked List',
    parts: {
      Node: [
        "class Node:",
        "    def __init__(self, value):",
        "        self.value = value",
        "        self.next = None",
      ],
      LinkedList: [
        "class LinkedList:",
        "    def __init__(self, value):",
        "        new_node = Node(value)",
        "        self.head = new_node",
        "        self.tail = new_node",
        "        self.length = 1",
      ],
      print_list: [
        "    def print_list(self):",
        "        temp = self.head",
        "        while temp is not None:",
        "            print(temp.value)",
        "            temp = temp.next",
      ],
      append: [
        "    def append(self, value):",
        "        new_node = Node(value)",
        "        if self.length == 0:",
        "            self.head = new_node",
        "            self.tail = new_node",
        "        else:",
        "            self.tail.next = new_node",
        "            self.tail = new_node",
        "        self.length += 1",
      ],
      pop: [
        "    def pop(self):",
        "        if self.length == 0:",
        "            return None",
        "        temp = self.head",
        "        pre = self.head",
        "        while temp.next:",
        "            pre = temp",
        "            temp = temp.next",
        "        self.tail = pre",
        "        self.tail.next = None",
        "        self.length -= 1",
        "        if self.length == 0:",
        "            self.head = None",
        "            self.tail = None",
        "        return temp.value",
      ],
    },
  },
  HashTable: {
    name: 'Hash Table',
    parts: {
      __init__: [
        "class HashTable:",
        "    def __init__(self, size = 7):",
        "        self.data_map = [None] * size",
      ],
      __hash: [
        "    def __hash(self, key):",
        "        my_hash = 0",
        "        for letter in key:",
        "            my_hash = (my_hash + ord(letter) * 23) % len(self.data_map)",
        "        return my_hash",
      ],
      print_table: [
        "    def print_table(self):",
        "        for i, val in enumerate(self.data_map):",
        "            print(i, ': ', val)",
      ],
      set_item: [
        "    def set_item(self, key, value):",
        "        index = self.__hash(key)",
        "        if self.data_map[index] == None:",
        "            self.data_map[index] = []",
        "        self.data_map[index].append([key, value])",
      ],
      get_item: [
        "    def get_item(self, key):",
        "        index = self.__hash(key)",
        "        if self.data_map[index] is not None:",
        "            for i in range(len(self.data_map[index])):",
        "                if self.data_map[index][i][0] == key:",
        "                    return self.data_map[index][i][1]",
        "        return None",
      ],
    },
  },
  BinarySearchTree: {
    name: 'Binary Search Tree',
    parts: {
      Node: [
        "class Node:",
        "    def __init__(self, value):",
        "        self.value = value",
        "        self.left = None",
        "        self.right = None",
      ],
      BST: [
        "class BST:",
        "    def __init__(self):",
        "        self.root = None",
      ],
      insert: [
        "    def insert(self, value):",
        "        new_node = Node(value)",
        "        if self.root is None:",
        "            self.root = new_node",
        "            return True",
        "        temp = self.root",
        "        while True:",
        "            if new_node.value == temp.value: return False",
        "            if new_node.value < temp.value:",
        "                if temp.left is None:",
        "                    temp.left = new_node",
        "                    return True",
        "                temp = temp.left",
        "            else:",
        "                if temp.right is None:",
        "                    temp.right = new_node",
        "                    return True",
        "                temp = temp.right",
      ],
      contains: [
        "    def contains(self, value):",
        "        temp = self.root",
        "        while temp is not None:",
        "            if value < temp.value:",
        "                temp = temp.left",
        "            elif value > temp.value:",
        "                temp = temp.right",
        "            else:",
        "                return True",
        "        return False",
      ],
    },
  },
  Graph: {
    name: 'Graph',
    parts: {
      __init__: [
        "class Graph:",
        "    def __init__(self):",
        "        self.adj_list = {}",
      ],
      add_vertex: [
        "    def add_vertex(self, vertex):",
        "        if vertex not in self.adj_list:",
        "            self.adj_list[vertex] = []",
      ],
      add_edge: [
        "    def add_edge(self, v1, v2):",
        "        if v1 in self.adj_list and v2 in self.adj_list:",
        "            self.adj_list[v1].append(v2)",
        "            self.adj_list[v2].append(v1)",
      ],
      remove_edge: [
        "    def remove_edge(self, v1, v2):",
        "        if v1 in self.adj_list and v2 in self.adj_list:",
        "            self.adj_list[v1] = [vertex for vertex in self.adj_list[v1] if vertex != v2]",
        "            self.adj_list[v2] = [vertex for vertex in self.adj_list[v2] if vertex != v1]",
      ],
      remove_vertex: [
        "    def remove_vertex(self, vertex):",
        "        if vertex in self.adj_list:",
        "            for other_vertex in self.adj_list[vertex]:",
        "                self.adj_list[other_vertex].remove(vertex)",
        "            del self.adj_list[vertex]",
      ],
    },
  },
};
