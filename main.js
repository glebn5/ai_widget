import { connectAgent } from './node_modules/@play-ai/agent-web-sdk';

document.addEventListener('DOMContentLoaded', function () {
  async function startCall(agentId) {
    try {
      const agentController = await connectAgent(agentId);
      console.log('Connected to agent. Conversation ID:', agentController.conversationId);
    } catch (error) {
      console.error('Failed to start conversation:', error);
    }
  }

  const callWidget = document.getElementById('call-widget');
  if (callWidget) {
    callWidget.onclick = function () {
      startCall('test-nSMuSkBj2RidU9oDtx_dq');
    };
  }
});
