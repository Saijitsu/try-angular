import {from} from 'rxjs';

const taskData = [
    {
      id: 0,
      name: 'Bien maîtriser Angular',
      status: 1,
      deadLine: '2019-05-31'
    },
    {
      id: 1,
      name: 'Apprendre React',
      status: 2,
      deadLine: '2019-07-11'
    },
    {
      id: 2,
      name: 'Apprendre Vue',
      status: 1,
      deadLine: '2019-10-19'
    },
    {
      id: 3,
      name: 'Apprendre le Cobol',
      status: 0,
      deadLine: '1959-12-25'
    }
  ]
  export const TaskProviderStub = {
    getTasks: () => from([taskData])
  };