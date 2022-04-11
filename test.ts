fixture`Foo`
  .page`http://localhost:8000`;

test('Bar', async t => {
  await t
    .debug()
    .wait(120000);
});
