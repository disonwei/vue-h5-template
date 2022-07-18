import moment from 'moment';

export type StrOrMoment = string | moment.Moment;

export interface SignatureMessage {
  params?: String;
  timestamp: String;
  appCode: String;
}
