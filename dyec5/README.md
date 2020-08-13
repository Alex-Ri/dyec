# DYEC 5
## Testing Vue Components with Vue Test Utils & Jest

- What is Vue Test Util (VTU)
- Benefits of testing components
- What to test
  - Component Contract

## What is Vue Test Util (VTU)

- Official unit testing library for Vue.js
- Collection of utilities and functions for simlyfing testing in Vue.js
- Default test runner is Jest
- Also possible with Karma or mocha
- Wrapper based test API
- Object that contains mounted components

## Benefits of testing components

- Less bugs & easier debugging
- Do your components work as expected?
- You get a documentation of your components
- Easier refactoring
  - Not breaking existing things
- Confidence while deploying

## What to test
- Test the components public interface
  - Black box texting
- Complete line-based coverage Is not recommended
- **Component Contract**
  - Expected Input  brings expected output
  - Inputs:
    - User actions
    - Store
    - Props
  - Outputs:
    - Rendered output
    - Vue Events
    - Functional calls

![Component Contract](https://github.com/Alex-Ri/dyec/tree/master/dyec5/public/component_contract.png)
