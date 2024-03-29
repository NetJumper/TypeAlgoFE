// types.ts or at the top of your UserStatsOperations.ts file
export interface UserStat {
    id?: string;
    name: string;
    bestTime: number;
    bestWPM: number;
    bestAccuracy: number;
  }
  
  export interface GraphQLResult<T> {
    data: T;
  }
  