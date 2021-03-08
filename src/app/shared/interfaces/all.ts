export interface Contract {
  id: string;
  type: 'HEALTH' | 'CAR';
  policyId: string; // 8001713247
  policyNumber: string; // 800/1713247-5
  title: string;
  amount: number;
  createdAt: string;
  claims?: Claim[];
}

interface Claim {
  id: string;
  status: 'IN_PROGRESS' | 'WAITING' | 'DONE';
  title: string;
  details: boolean;
}

interface ContractDocument {
  id: string;
  name: string;
  date: string;
}
