// export const TYPE_LOG = 'log';
// export const TYPE_WARN = 'warn';
// export const TYPE_ERROR = 'error';
import {
    TYPE_WARN
} from './constant.js';

function logger(log, type = 'log') {
    console[type](log)
}
//Day export ra ngoai de cac file khac co the su dung
//1 module co the export default 1 lan
export default logger;
