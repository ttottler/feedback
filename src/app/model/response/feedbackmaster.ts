export interface InterfaceFeedbackMaster {
  sno?: number;
  feedbackid: string;
  feedbacktypecode: string;
  academic: string;
  semester: number;
  minrating: number;
	maxrating: number;
  questioncount: number;
  active: string;
  createdby: string;
  createddate: string;
  createddatetime: string;
	modifiedby?: string;
  modifieddate?: string;
  modifieddatetime?: string;
}
