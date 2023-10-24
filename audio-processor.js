class AudioProcessor extends AudioWorkletProcessor {
  constructor() {
    super();
  }

  process(inputs, outputs, parameters) {
    const input = inputs[0];
    const output = outputs[0];

    for (let channel = 0; channel < input.length; ++channel) {
      const inputChannel = input[channel];
      const outputChannel = output[channel];

      for (let i = 0; i < inputChannel.length; ++i) {
        // Apply an example audio effect (e.g., gain)
        outputChannel[i] = inputChannel[i] * 0.5; // Reducing the volume by half
      }
    }

    return true;
  }
}

registerProcessor('audio-processor', AudioProcessor);