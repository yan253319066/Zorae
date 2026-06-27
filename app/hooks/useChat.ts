'use client';

import { useState } from 'react';
import { Message } from '../types';

export function useChat() {
  const [chatInput, setChatInput] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hello! I am the **Zorae AI Brand Advisor**. I can help you evaluate the potential of the **zorae.ai** domain. Tell me about your startup idea, and I will show you how Zorae.ai can elevate your brand!"
    }
  ]);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [userStartupIdea, setUserStartupIdea] = useState<string>('');

  const handleSendMessage = async (e?: React.FormEvent, directIdea?: string) => {
    if (e) e.preventDefault();

    const query = directIdea ?? chatInput;
    if (!query.trim()) return;

    const userMsg: Message = { role: 'user', content: query };
    setMessages(prev => [...prev, userMsg]);
    setChatInput('');
    setIsTyping(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMsg],
          userIdea: directIdea || userStartupIdea
        }),
      });

      const data = await response.json();
      if (data.error) {
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: `Error: ${data.error}`
        }]);
      } else {
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: data.text
        }]);
      }
    } catch {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: "Connection failed. Please ensure the server is responsive and try again."
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  const appendAssistantMessage = (content: string) => {
    setMessages(prev => [...prev, { role: 'assistant', content }]);
  };

  return {
    chatInput,
    setChatInput,
    messages,
    isTyping,
    userStartupIdea,
    setUserStartupIdea,
    handleSendMessage,
    appendAssistantMessage,
  };
}
