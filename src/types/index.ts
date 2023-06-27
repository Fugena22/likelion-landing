declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GITHUB_AUTH_TOKEN: string;
      PORT?: string;
      PWD: string;
      NEXT_PUBLIC_MONGO_URI: string;
    }
  }
}

export interface IBlog {
  title: string;
  slug: string;
  day: number;
  imageUrl: string;
  readingTime: string;
  publishOn: number;
}

export interface ICourse {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  price: number;
  discountedPrice: number;
  objectives: string[];
  features: string[];
  modules: IModule[];
  requirements: string[];
}

export interface IModule {
  id: string;
  name: string;
  lessons: string[];
  courseId?: string;
}
