"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
// import * as assert from 'assert';
const mocha = tslib_1.__importStar(require("mocha"));
const path = tslib_1.__importStar(require("path"));
const mockRun = tslib_1.__importStar(require("vsts-task-lib/mock-run"));
//https://github.com/Microsoft/vsts-task-lib/blob/master/node/docs/stepbystep.md
mocha.describe('run()', () => {
    mocha.it('should run', () => {
        const taskPath = path.join(__dirname, 'index.js');
        const taskRunner = new mockRun.TaskMockRunner(taskPath);
        taskRunner.setInput('api_key', '424344'); //INPUT_API_KEY
        taskRunner.setInput('command', '424344'); //INPUT_COMMAND
        taskRunner.run();
    });
});
//# sourceMappingURL=index.spec.js.map