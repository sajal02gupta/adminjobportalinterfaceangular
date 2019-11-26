export class JobInfo{
    constructor(
      public jobId: string,
      public jobTitle: string,
      public jobCategory: string,
      public  primaryLocation: string,
      public  additionalLocation: string,
      public  schedule: string,
      public jobType: string,
      public jobSummary: string,
      public jobDescription: string,
      public jobQualification: string[]=[],
      public workEnvironment: string,
      public recruiter: string,
      public similarJobs: string
  
    ){}
  }
  