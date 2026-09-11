import { expect, test } from "@playwright/test";

test.describe("Formulário de contato", () => {
  test("deve enviar uma mensagem com sucesso", async ({ page }) => {
    await page.route("**/api/contato", async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({
          message: "Mensagem enviada com sucesso.",
          id: "e2e-test-id",
        }),
      });
    });

    await page.goto("/");

    await page
      .locator("#contato-nome")
      .fill("Teste E2E");

    await page
      .locator("#contato-email")
      .fill("teste@example.com");

    await page
      .locator("#contato-mensagem")
      .fill("Mensagem de teste E2E.");

    const responsePromise = page.waitForResponse(
      "**/api/contato",
    );

    await page
      .getByRole("button", {
        name: "Enviar mensagem",
      })
      .click();

    const response = await responsePromise;

    expect(response.status()).toBe(200);

    await expect(
      page
        .locator("#contato")
        .getByRole("status"),
    ).toHaveText(
      "Mensagem enviada com sucesso! Em breve entraremos em contato.",
    );
  });

  test("deve exibir mensagem de erro quando o envio falhar", async ({
    page,
  }) => {
    const responsePromise = page.waitForResponse(
      "**/api/contato",
    );

    await page.route("**/api/contato", async (route) => {
      await route.fulfill({
        status: 500,
        contentType: "application/json",
        body: JSON.stringify({
          error: "Não foi possível enviar a mensagem.",
        }),
      });
    });

    await page.goto("/");

    await page
      .locator("#contato-nome")
      .fill("Teste E2E");

    await page
      .locator("#contato-email")
      .fill("teste@example.com");

    await page
      .locator("#contato-mensagem")
      .fill("Mensagem de teste E2E.");

    await page
      .getByRole("button", {
        name: "Enviar mensagem",
      })
      .click();

    const response = await responsePromise;

    expect(response.status()).toBe(500);

    await expect(
      page
        .locator("#contato")
        .getByRole("alert"),
    ).toHaveText(
      "Não foi possível enviar sua mensagem. Tente novamente.",
    );
  });

  test("não deve enviar o formulário com campos obrigatórios vazios", async ({
    page,
  }) => {
    let requestSent = false;

    await page.route("**/api/contato", async (route) => {
      requestSent = true;

      await route.continue();
    });

    await page.goto("/");

    await page
      .getByRole("button", {
        name: "Enviar mensagem",
      })
      .click();

    await expect(
      page.locator("#contato-nome"),
    ).toBeFocused();

    expect(requestSent).toBe(false);
  });
});