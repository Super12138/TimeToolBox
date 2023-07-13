import { formatDate, formatDateExtend } from './utils/date';
import { showDialog } from './utils/dialog';
import { scrollTo } from './utils/page';

const calcDateBtn = document.querySelector('#calcDateBtn');
const calcExpDateBtn = document.querySelector('#calcExpDateBtn');
const calcPassDateBtn = document.querySelector('#calcPassDateBtn');
const output = document.querySelector('#output');
const scorllTrue = true;

calcDateBtn.addEventListener('click', () => {
    const inputDate = document.querySelector('#inputTime').value;
    const inputYear = Number(document.querySelector('#year').value);
    const inputMonth = Number(document.querySelector('#month').value);
    const inputDay = Number(document.querySelector('#day').value);
    const inputHour = Number(document.querySelector('#hour').value);
    const inputMinute = Number(document.querySelector('#minute').value);
    const inputSecond = Number(document.querySelector('#second').value);
    if (!inputDate) {
        showDialog('错误', '请输入原始日期');
        return;
    }

    if (!inputYear && !inputMonth && !inputDay && !inputHour && !inputMinute && !inputSecond) {
        showDialog('错误', '请输入增加日期');
        return;
    }

    const calcDate = new Date(inputDate);
    calcDate.setFullYear(calcDate.getFullYear() + inputYear);
    calcDate.setMonth(calcDate.getMonth() + inputMonth);
    calcDate.setDate(calcDate.getDate() + inputDay);
    calcDate.setHours(calcDate.getHours() + inputHour);
    calcDate.setMinutes(calcDate.getMinutes() + inputMinute);
    calcDate.setSeconds(calcDate.getSeconds() + inputSecond);

    const formattedCalcDate = formatDateExtend(calcDate);
    const now = formatDateExtend(new Date());

    output.innerHTML += `${now} - <strong>日期计算器</strong>：计算后日期 <code>${formattedCalcDate}</code><br>`;
    showDialog('完成', `计算后日期：<code>${formattedCalcDate}</code>`, scorllTrue);
    scrollTo('#outputTitle');
})

calcExpDateBtn.addEventListener('click', () => {
    const produceDate = document.querySelector('#produceDate').value;
    const expYear = Number(document.querySelector('#expYear').value);
    const expMonth = Number(document.querySelector('#expMonth').value);
    const expDay = Number(document.querySelector('#expDay').value);

    if (!produceDate) {
        showDialog('错误', '请输入生产日期');
        return;
    }

    if (!expYear && !expMonth && !expDay) {
        showDialog('错误', '请输入保质期时间');
        return;
    }

    const calcExpDate = new Date(produceDate);
    calcExpDate.setFullYear(calcExpDate.getFullYear() + expYear);
    calcExpDate.setMonth(calcExpDate.getMonth() + expMonth);
    calcExpDate.setDate(calcExpDate.getDate() + expDay);

    const now = formatDateExtend(new Date());

    const formattedExpDate = formatDate(calcExpDate);
    output.innerHTML += `${now} - <strong>保质期计算器</strong>：本产品到 <code>${formattedExpDate}</code> 过期<br>`;
    showDialog('完成', `本产品到 <code>${formattedExpDate}</code> 过期`, scorllTrue);
    scrollTo('#outputTitle');
})

calcPassDateBtn.addEventListener('click', () => {
    const startTime = document.querySelector('#startTime').value;
    console.log(startTime);
    const endTime = document.querySelector('#endTime').value;
    if (!startTime && !endTime) {
        showDialog('错误', '请输入开始和结束时间');
        return;
    }
    if (!startTime) {
        showDialog('错误', '请输入开始时间');
        return;
    }
    if (!endTime) {
        showDialog('错误', '请输入结束时间');
        return;
    }
    const passMs = new Date(endTime).getTime() - new Date(startTime).getTime();
    const passDays = passMs / 1000 / 60 / 60 / 24;

    const now = formatDateExtend(new Date());
    const formattedStartTime = formatDate(new Date(startTime));
    const formattedEndTime = formatDate(new Date(endTime));

    output.innerHTML += `${now} - <strong>经过时间计算器</strong>：经过了 <code>${passDays}</code> 天<br>`;
    showDialog('完成', `从 <code>${formattedStartTime}</code> 到 <code>${formattedEndTime}</code> 经过了 <code>${passDays}</code> 天`, scorllTrue);
    scrollTo('#outputTitle');
})