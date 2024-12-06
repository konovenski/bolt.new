import { createAmazonBedrock } from '@ai-sdk/amazon-bedrock';

export function getAnthropicModel(apiKey: string) {
  const bedrock = createAmazonBedrock({
    region: 'us-west-1'
  });

  return bedrock('anthropic.claude-3-5-sonnet-20241022-v2:0');
}
