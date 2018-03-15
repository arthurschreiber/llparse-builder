import { Span } from '../code';
import { Node } from './base';

export class SpanStart extends Node {
  constructor(public readonly span: any, public readonly callback: Span) {
    super(`span_start_${callback.name}`);
  }
}
