import moment from 'moment';
import { StrOrMoment } from '/@/common/types';

export enum Format {
  DATETIME_FORMAT_POINT = 'YYYY.MM.DD HH:mm',
  DATETIME_FORMAT = 'YYYY-MM-DD HH:mm:ss',
  DATETIME_FORMAT_NO_SECONDS = 'YYYY-MM-DD HH:mm',
  DATETIME_FORMAT_ZH_HANS = 'YYYY年MM月DD日HH:mm',
  DATETIME_FORMAT_ZH_HANT = 'YYYY年MM月DD日HH:mm',

  DATE_FORMAT_WITH_YEAR = 'YYYY-MM-DD',
  DATE_FORMAT = 'MM-DD',

  TIME_FORMAT = 'HH:mm:ss',
  TIME_FORMAT_MINUTES = 'HH:mm',
  TIME_FORMAT_SECONDS = 'mm:ss',
}

export const format = (datetime: StrOrMoment, format: Format) => {
  const _moment = moment(datetime);

  return _moment.isValid() ? _moment.format(format) : (datetime as string);
};

export const getTimestamp = () => {
  return moment().format('x');
};
