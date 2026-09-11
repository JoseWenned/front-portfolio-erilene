import { Resend } from "resend";

export async function POST(request: Request) {
    try {
        const apiKey = process.env.RESEND_API_KEY;
        const contactEmail = process.env.CONTACT_EMAIL_TO;

        if (!apiKey || !contactEmail) {
            console.error(
                "Configuração do Resend não encontrada."
            );

            return Response.json(
            {
                error: "Serviço de contato indisponível.",
            },
            { status: 500 }
        );
        }

        const resend = new Resend(apiKey);

        const body = await request.json();

        const { nome, email, mensagem } = body;

        if (!nome || !email || !mensagem) {
            return Response.json(
                {
                    error: "Nome, e-mail e mensagem são obrigatórios.",
                },
                { status: 400 }
            );
        }

        const { data, error } = await resend.emails.send({
            from: "Erline <onboarding@resend.dev>",
            to: [contactEmail],
            replyTo: email,
            subject: `Novo contato de ${nome}`,
            text: `
                Novo contato pelo portfólio

                Nome: ${nome}
                E-mail: ${email}

                    Mensagem:
                    ${mensagem}
                `,
            });

        if (error) {
            console.error("Erro ao enviar e-mail:", error);

            return Response.json(
                {
                error: "Não foi possível enviar a mensagem.",
                },
                { status: 500 }
            );
            }

            return Response.json(
            {
                message: "Mensagem enviada com sucesso.",
                id: data?.id,
            },
            { status: 200 }
            );
        } catch (error) {
            console.error("Erro na API de contato:", error);

        return Response.json(
            {
                error: "Erro interno ao processar a mensagem.",
            },
            { status: 500 }
        );
    }
}