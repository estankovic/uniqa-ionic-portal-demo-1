import {Contract} from '../interfaces/all';

const contracts: Contract[] = [
  {
    id: '405a4394-c3c2-44dd-a393-ca9966870c38',
    type: 'HEALTH',
    policyId: '8001236985',
    policyNumber: '800/1236985-9',
    amount: 548.36,
    title: 'Pain killers',
    createdAt: '21.02.2021',
    claims: [
      {
        id: '8774a9a8-12d2-42d3-8dae-035498f4febd',
        status: 'IN_PROGRESS',
        title: 'Give me my money. NOW!',
        details: true,
      },
      {
        id: 'f6876997-2d9f-43be-ac49-8536dd805f9e',
        status: 'WAITING',
        title: 'Give me my money!',
        details: false,
      },
      {
        id: '68de51eb-3aba-4612-8157-438a4fa6b07d',
        status: 'DONE',
        title: 'Could I get my money, Please?',
        details: true,
      },
    ]
  },
  {
    id: '05c4e059-81c6-4850-8b64-982ac645d3f3',
    type: 'HEALTH',
    policyId: '8001236985',
    policyNumber: '800/1236985-9',
    amount: 16798.76,
    title: 'Open Hearth Surgery',
    createdAt: '06.11.2020',
  },
  {
    id: 'b12bc45c-ee91-417e-919f-74b110c78e20',
    type: 'HEALTH',
    policyId: '8001987654',
    policyNumber: '800/1987654-5',
    amount: 77.36,
    title: 'Covid-19 vaccination',
    createdAt: '03.02.2021',
  },
  {
    id: 'c47f0cfd-da45-45d1-bafb-2ef6d8f58ca8',
    type: 'HEALTH',
    policyId: '8006636985',
    policyNumber: '800/6636985-3',
    amount: 238.96,
    title: 'Broken Hand Surgery',
    createdAt: '11.01.2021',
  },
  {
    id: 'fc3e9e9b-2e62-44a8-a3a9-2a08bf05e824',
    type: 'HEALTH',
    policyId: '800887452365',
    policyNumber: '800/887452365-2',
    amount: 48.36,
    title: 'Eye Surgery',
    createdAt: '06.01.2021',
  },
  {
    id: 'ef0ca963-e784-442c-803d-d773e6d3e80f',
    type: 'CAR',
    policyId: '8006584785',
    policyNumber: '800/6584785-3',
    amount: 648.36,
    title: 'Broken Windshield',
    createdAt: '02.01.2021',
  },
  {
    id: 'a770adf8-a804-4259-b153-1a8ce6f28801',
    type: 'CAR',
    policyId: '8003657963',
    policyNumber: '800/3657963-1',
    amount: 998.78,
    title: 'Trunk Replacement',
    createdAt: '06.01.2021',
    claims: [
      {
        id: 'd25a21ff-8e5f-4c42-8eed-2f1b60a11a0d',
        status: 'WAITING',
        title: 'Give me my money. NOW!',
        details: false,
      },
      {
        id: 'c3b79259-6a4e-4909-8a9d-dac11ac30240',
        status: 'DONE',
        title: 'Give me my money!',
        details: true,
      },
      {
        id: '69a4754a-8cc6-4956-a5f4-ce3f26bfd542',
        status: 'DONE',
        title: 'Could I get my money, Please?',
        details: false,
      },
    ]

  }
];

export const getAllContracts = (type?: 'HEALTH' | 'CAR') => type ? contracts.filter(c => c.type === type) : contracts;

export const getContract = (id) => contracts.find(c => c.id === id);
