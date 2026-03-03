import { useState } from "react";
import styled, { css } from "styled-components";

// Formulario con https://web3forms.com/
export function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const submit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.target);
    formData.append("access_key", "f459f280-a3ec-471e-8e34-96bcbc444861");
    formData.append(
      "subject",
      `Nuevo mensaje desde el portfolio — ${formData.get("name")}`,
    );

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setStatus(data.success ? "success" : "error");
    if (data.success) e.target.reset();
  };

  if (status === "success") {
    return (
      <Success>
        <SuccessIcon>✓</SuccessIcon>
        <p>¡Mensaje enviado! Te respondo pronto.</p>
      </Success>
    );
  }

  return (
    <Form onSubmit={submit}>
      <FormGroup>
        <Input required name="name" placeholder="TU NOMBRE" />
      </FormGroup>
      <FormGroup>
        <Input required type="email" name="email" placeholder="TU EMAIL" />
      </FormGroup>
      <FormGroup>
        <Textarea
          required
          name="message"
          placeholder="CUÉNTAME TU PROYECTO..."
          rows={5}
        />
      </FormGroup>
      {status === "error" && (
        <ErrorMsg>
          Error al enviar. Intenta de nuevo o escríbeme directamente.
        </ErrorMsg>
      )}
      <SubmitBtn type="submit" disabled={status === "sending"} data-hover>
        {status === "sending" ? "ENVIANDO..." : "ENVIAR MENSAJE"}
      </SubmitBtn>
    </Form>
  );
}

/* ── styled ── */
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const FormGroup = styled.div``;

const inputStyles = css`
  width: 100%;
  background: transparent;
  border: 1px solid var(--border);
  color: var(--fg);
  font-family: var(--font-body);
  font-size: 11px;
  letter-spacing: 2px;
  padding: 14px 18px;
  outline: none;
  transition: border-color 0.2s;
  &::placeholder {
    color: var(--dim);
  }
  &:focus {
    border-color: var(--fg);
  }
`;

const Input = styled.input`
  ${inputStyles}
`;

const Textarea = styled.textarea`
  ${inputStyles}
  resize: none;
  min-height: 110px;
`;

const SubmitBtn = styled.button`
  display: inline-block;
  font-family: var(--font-body);
  font-size: 10px;
  letter-spacing: 3px;
  padding: 14px 32px;
  background: var(--fg);
  color: var(--bg);
  border: 1px solid var(--fg);
  transition:
    background 0.2s,
    color 0.2s,
    transform 0.15s,
    opacity 0.2s;
  align-self: flex-start;
  &:hover:not(:disabled) {
    background: transparent;
    color: var(--fg);
  }
  &:active:not(:disabled) {
    transform: scale(0.97);
  }
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

const ErrorMsg = styled.p`
  font-size: 11px;
  letter-spacing: 1px;
  color: #c0392b;
  padding: 10px 14px;
  border: 1px solid #c0392b33;
`;

const Success = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 72px 40px;
  border: 1px solid var(--border);
  text-align: center;
  color: #555;
  letter-spacing: 2px;
  font-size: 11px;
`;

const SuccessIcon = styled.span`
  font-family: var(--font-display);
  font-size: 52px;
  color: var(--fg);
`;
