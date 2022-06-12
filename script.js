(() => {
    const SECOND = 1000;
    const MINUTE = SECOND * 60;
    const HOUR = MINUTE * 60;
    const DAY = HOUR * 24;

    // ใส่แค่ id กับ text
    function setElementInnerText(id, text) {
        const element = document.getElementById(id);
        element.innerText = text;
    }

    function countDown() {
        const now = new Date().getTime();
        const newYear = new Date('December 31, 2022 23:59:59').getTime();
        const unixTimeleft = newYear - now;

        setElementInnerText('days', Math.floor(unixTimeleft / DAY));
        setElementInnerText('hours', Math.floor(unixTimeleft % DAY / HOUR));
        setElementInnerText('minutes', Math.floor(unixTimeleft % HOUR / MINUTE));
        setElementInnerText('seconds', Math.floor(unixTimeleft % MINUTE / SECOND));
        
    }

    function run() {
        countDown();
        setInterval(countDown, SECOND);
    }
    run();
})();