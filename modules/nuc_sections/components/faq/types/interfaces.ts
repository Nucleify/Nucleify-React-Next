import type { AccordionPanelInterface } from 'atomic'

export type SiteType = string

export interface NucQuestionObjectInterface extends AccordionPanelInterface {}

export interface NucSectionFaqInterface {
  questions?: NucQuestionObjectInterface | NucQuestionObjectInterface[]
  site?: SiteType
}

export interface UseSplitQuestionsInterface {
  column1: NucQuestionObjectInterface[]
  column2: NucQuestionObjectInterface[]
}
