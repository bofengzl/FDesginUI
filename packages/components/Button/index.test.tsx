// packages/components/example.test.js
import { describe, it, expect } from 'vitest';

// 使用 describe 来定义一个测试套件，名称为 '示例测试'
describe('示例测试', () => {
  // 使用 it 来定义一个具体的测试用例，描述为 '应该返回 true'
  it('应该返回 true', () => {
    // 使用 expect 来断言某个值是否符合预期
    expect(true).toBe(true); // 这里的断言是检查 true 是否等于 true
  });
});
