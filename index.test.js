import {getStopWatchTime} from './src/helperFunctions';
import {expect, jest, test} from '@jest/globals';

//Run the tests by "npm test"
//End to end testing done by cypress. To do that, 
//run "npx cypress open", select E2E testing and run the tests.
//hit continue when asked to select a config
//select chrome for the browser when asked and select "start testing"
//click on "test-spec.cy.js"

describe('Milliseconds', () => {
    test("should show all 0's at start", () => {
        expect(getStopWatchTime(0)).toBe('00:00:00:00');
    });

    test("should show nothing if milliseconds < 10", () => {
        expect(getStopWatchTime(9)).toBe("00:00:00:00");
        expect(getStopWatchTime(1)).toBe("00:00:00:00");
    });

    test("should show smallest non 0 value at milliseconds = 10", () => {
        expect(getStopWatchTime(10)).toBe('00:00:00:01');
    });

    test("should show only milliseconds value if ms < 1000", () => {
        expect(getStopWatchTime(50)).toBe('00:00:00:05');
        expect(getStopWatchTime(100)).toBe('00:00:00:10');
        expect(getStopWatchTime(999)).toBe('00:00:00:99');
    });

    test("should show 0 milliseconds value if ms = 1000", () => {
        expect(getStopWatchTime(1000)).toBe('00:00:01:00');
    });
});

describe('seconds', () => {
    test("should show 1s at 1000-1999 ms", () => {
        expect(getStopWatchTime(1001)).toBe('00:00:01:00');
        expect(getStopWatchTime(1010)).toBe('00:00:01:01');
        expect(getStopWatchTime(1100)).toBe('00:00:01:10');
        expect(getStopWatchTime(1999)).toBe('00:00:01:99');
    });

    test("should show 2s at 2000 ms", () => {
        expect(getStopWatchTime(2000)).toBe('00:00:02:00');
    });

    test("should show 9s at 9000-9999 ms", () => {
        expect(getStopWatchTime(9000)).toBe('00:00:09:00');
        expect(getStopWatchTime(9999)).toBe('00:00:09:99');
    });

    test("should show 10s at 10000 ms", () => {
        expect(getStopWatchTime(10000)).toBe('00:00:10:00');
    });

    test("should show 59s at 59999 ms", () => {
        expect(getStopWatchTime(59999)).toBe('00:00:59:99');
    });

    test("should show 0s at 60000 ms", () => {
        expect(getStopWatchTime(60000)).toBe('00:01:00:00');
    });
});

describe('minutes', () => {
    test("should show 1m at 60000-119999 ms", () => {
        expect(getStopWatchTime(60000)).toBe('00:01:00:00');
        expect(getStopWatchTime(119999)).toBe('00:01:59:99');
    });

    test("should show 9m at 540000-59999ms", () => {
        expect(getStopWatchTime(540000)).toBe('00:09:00:00');
        expect(getStopWatchTime(599999)).toBe('00:09:59:99');
    });

    test("should show 10m at 600000ms", () => {
        expect(getStopWatchTime(600000)).toBe('00:10:00:00');
    });

    test("should show 59m", () => {
        expect(getStopWatchTime(59*60000)).toBe('00:59:00:00');
    });

    test("should show 0m after an hour", () => {
        expect(getStopWatchTime(60*60000)).toBe('01:00:00:00');
    });
});

describe('hours', () => {
    test("should show values over 1h", () => {
        expect(getStopWatchTime((60*60000)+10)).toBe('01:00:00:01');
        expect(getStopWatchTime(7199999)).toBe('01:59:59:99');
        expect(getStopWatchTime(7200000)).toBe('02:00:00:00');
    });
});

