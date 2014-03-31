#!/bin/bash
cd phantomjs-sandbox
node app.js > /dev/null 2>&1 &
NODE_PID=$!

cd ..

# e2e tests
casperjs test --xunit="test-reports/TEST-casperjs-e2e.xml" --no-colors phantomjs-sandbox/tests/e2e/chapter08-recipe05-spec.js
E2E_STATUS=$?

# performance tests
echo "Running performance test with YSlow..."
phantomjs lib/yslow.js -i grade -f junit http://localhost:3000/form-demo > test-reports/TEST-form-demo-yslow.xml
PERF_STATUS=$?
echo "Performance test results stored in test-reports/TEST-form-demo-yslow.xml"

kill $NODE_PID

if [ "$E2E_STATUS" == "0" -a "$PERF_STATUS" == "0" ]; then
  exit 0
else
  exit 1
fi