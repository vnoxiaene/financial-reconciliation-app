import { Result } from "./result.model";
import { UnmatchedReport } from "./unmatched-report.model";

export class MatchingReport {
    results: Result[];
    unmatchedReports: UnmatchedReport[];
}
