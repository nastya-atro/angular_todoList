export interface List {
  id: number;
  title: string;
  description: string;
  isImportant?: boolean;
  tasks: Task[] | null
}

export interface Task {
  id: number;
  name: string;
  isDone: boolean;
}

export const list: List[] =[
  {
    id: 1,
    title: 'Books',
    description: 'Some descriptions about reading',
    tasks:[
      {
        id: 1,
        name: 'Master and Margarita',
        isDone: false,
      },
      {
        id: 2,
        name: 'Chosen',
        isDone: false,
      },
    ]
  },
  {
    id: 2,
    title: 'Movies',
    description: 'Some descriptions about movies',
    isImportant: true,
    tasks:[
      {
        id: 1,
        name: 'RICK I MORTI',
        isDone: false,
      },
      {
        id: 2,
        name: 'Ariel',
        isDone: false,
      },
    ]
  },
  {
    id: 3,
    title: 'Work',
    description: 'Some descriptions about work',
    tasks:[
      {
        id: 1,
        name: 'Investigate Angular',
        isDone: false,
      },
      {
        id: 2,
        name: 'Fix style bugs',
        isDone: false,
      },
    ]
  },
  {
    id: 4,
    title: 'Shopping',
    description: 'Some descriptions about shopping',
    isImportant: true,
    tasks:[
      {
        id: 1,
        name: 'Buy milk',
        isDone: false,
      },
      {
        id: 2,
        name: 'Buy peanut butter',
        isDone: false,
      },
    ]
  }
]
