graph TD

    Start[User Opens App] --> CheckAuth{Authenticated?}

    CheckAuth -->|No| EmailEntry[Enter Email]

    EmailEntry --> RequestOTP[Request OTP]

    RequestOTP --> RateLimit{Rate Limited?}

    RateLimit -->|Yes| ShowCooldown[Show Cooldown Message]

    ShowCooldown --> EmailEntry

    RateLimit -->|No| SendOTP[Send OTP Code]

    SendOTP --> EnterOTP[Enter OTP Code]

    EnterOTP --> VerifyOTP{OTP Valid?}

    VerifyOTP -->|No| WrongOTP[Show Error]

    WrongOTP --> CheckAttempts{Max Attempts?}

    CheckAttempts -->|Yes| Lockout[Show Lockout]

    Lockout --> EmailEntry

    CheckAttempts -->|No| EnterOTP

    VerifyOTP -->|Yes| CreateSession[Create Session]

    CreateSession --> CheckOnboarding{Onboarding Complete?}

    CheckAuth -->|Yes| CheckOnboarding

    CheckOnboarding -->|No| Onboard1[Screen 1: Welcome]

    Onboard1 --> Onboard2[Screen 2: Language]

    Onboard2 --> Onboard3[Screen 3: City]

    Onboard3 --> Onboard4[Screen 4: Situation]

    Onboard4 --> Onboard5[Screen 5: Dietary]

    Onboard5 --> Onboard6[Screen 6: Interests]

    Onboard6 --> Onboard7[Screen 7: Notifications]

    Onboard7 --> Onboard8[Screen 8: Plan Ready]

    Onboard8 --> Onboard9[Screen 9: Verification/Pro]

    Onboard9 --> SavePreferences[Save User Preferences]

    SavePreferences --> Home

    CheckOnboarding -->|Yes| Home[Home Dashboard]

    Home --> First7Tasks[First 7 Tasks Module]

    Home --> Guides[Guides Hub]

    Home --> Discover[Discover Directory]

    Home --> Events[Events Hub]

    Home --> Community[Community Hub]

    Home --> HelpMe[Help Me CTA]

    Home --> Settings[Settings/Profile]

    First7Tasks --> TaskDetail[Open Task Detail]

    TaskDetail --> MarkDone[Mark Task Complete]

    MarkDone --> UpdateProgress[Update Progress]

    UpdateProgress --> CheckComplete{All 7 Done?}

    CheckComplete -->|No| First7Tasks

    CheckComplete -->|Yes| ShowCompletion[Show Completion State]

    ShowCompletion --> Home

    Guides --> GuideList[Browse Guide Categories]

    GuideList --> GuideDetail[View Guide Detail]

    GuideDetail --> ViewChecklist[View Related Checklist]

    ViewChecklist --> ChecklistItem[Checklist Item]

    ChecklistItem --> SetReminder[Set Reminder]

    SetReminder --> GuideDetail

    ChecklistItem --> MarkItemDone[Mark Item Done]

    MarkItemDone --> GuideDetail

    GuideDetail --> ReportGuide[Report Inaccurate]

    ReportGuide --> ReportFlow

    Discover --> SearchListings[Search/Browse Listings]

    SearchListings --> ApplyFilters[Apply Dietary Filters]

    ApplyFilters --> ListingResults[View Results]

    ListingResults --> ListingDetail[View Listing Detail]

    ListingDetail --> SaveListing[Save Listing]

    SaveListing --> ListingDetail

    ListingDetail --> WriteReview[Write Review]

    WriteReview --> CheckReviewLimit{Rate Limited?}

    CheckReviewLimit -->|Yes| ShowReviewLimit[Show Limit Message]

    ShowReviewLimit --> ListingDetail

    CheckReviewLimit -->|No| SubmitReview[Submit Review]

    SubmitReview --> ListingDetail

    ListingDetail --> ReportListing[Report Listing]

    ReportListing --> ReportFlow

    Discover --> SuggestPlace[Suggest a Place]

    SuggestPlace --> CheckSuggestLimit{Rate Limited?}

    CheckSuggestLimit -->|Yes| ShowSuggestLimit[Show Limit Message]

    ShowSuggestLimit --> Discover

    CheckSuggestLimit -->|No| SubmitSuggestion[Submit for Approval]

    SubmitSuggestion --> PendingQueue[Admin Approval Queue]

    PendingQueue --> Discover

    Events --> EventsFeed[Browse Events Feed]

    EventsFeed --> FilterEvents[Filter by City/Interests]

    FilterEvents --> EventDetail[View Event Detail]

    EventDetail --> SetRSVP[Set RSVP Status]

    SetRSVP --> EventReminder[Enable Event Reminder]

    EventReminder --> EventDetail

    EventDetail --> SaveEvent[Save Event]

    SaveEvent --> EventDetail

    EventDetail --> ReportEvent[Report Event]

    ReportEvent --> ReportFlow

    Community --> CheckVerified{Verified User?}

    CheckVerified -->|No| ShowVerificationGate[Show Verification Gate]

    ShowVerificationGate --> VerificationFlow

    CheckVerified -->|Yes| DailyFriend[Daily Friend]

    DailyFriend --> CreatePlan[Create Friendship Plan]

    CreatePlan --> CheckPlanLimit{Rate Limited?}

    CheckPlanLimit -->|Yes| ShowPlanLimit[Show Limit Message]

    ShowPlanLimit --> DailyFriend

    CheckPlanLimit -->|No| SubmitPlan[Submit Plan]

    SubmitPlan --> PlanActive[Plan Active]

    PlanActive --> DailyFriend

    DailyFriend --> BrowsePlans[Browse Plans]

    BrowsePlans --> RespondPlan[Respond to Plan]

    RespondPlan --> CreateMatch[Create Match]

    CreateMatch --> Chat1to1[1:1 Chat]

    Chat1to1 --> SendMessage[Send Message]

    SendMessage --> CheckChatLimit{Rate Limited?}

    CheckChatLimit -->|Yes| ShowChatLimit[Show Limit Message]

    ShowChatLimit --> Chat1to1

    CheckChatLimit -->|No| MessageSent[Message Sent]

    MessageSent --> Chat1to1

    Chat1to1 --> BlockUser[Block User]

    BlockUser --> BlockFlow

    Chat1to1 --> ReportUser[Report User]

    ReportUser --> ReportFlow

    Chat1to1 --> EndChat[End Chat]

    EndChat --> FeedbackPrompt[Feedback Prompt]

    FeedbackPrompt --> DailyFriend

    HelpMe --> CreateHelpRequest[Create Translation Request]

    CreateHelpRequest --> SelectCategory[Select Category]

    SelectCategory --> SetDirection[Set Language Direction]

    SetDirection --> AddNotes[Add Optional Notes]

    AddNotes --> ConsentEmergency[Consent for Emergency Info]

    ConsentEmergency --> SubmitRequest[Submit Help Request]

    SubmitRequest --> RouteRequest[Route to Volunteers]

    RouteRequest --> CheckVolunteers{Volunteers Available?}

    CheckVolunteers -->|No| NoVolunteers[Show No Volunteers Message]

    NoVolunteers --> HelpMe

    CheckVolunteers -->|Yes| VolunteerAccepts[Volunteer Accepts]

    VolunteerAccepts --> HelpSession[Help Me Session]

    HelpSession --> TextChat[Text Chat]

    TextChat --> SessionBlock[Block in Session]

    SessionBlock --> BlockFlow

    TextChat --> SessionReport[Report in Session]

    SessionReport --> ReportFlow

    TextChat --> EndSession[End Session]

    EndSession --> RateSession[Rate Session]

    RateSession --> SafetyReview[Safety Review Prompt]

    SafetyReview --> HelpMe

    VerificationFlow[Verification Flow] --> UploadDoc[Upload Verification Document]

    UploadDoc --> CheckFileValid{File Valid?}

    CheckFileValid -->|No| ShowFileError[Show File Error]

    ShowFileError --> UploadDoc

    CheckFileValid -->|Yes| SubmitVerification[Submit for Review]

    SubmitVerification --> VerificationPending[Status: Pending]

    VerificationPending --> AdminReview[Admin Reviews]

    AdminReview --> AdminDecision{Approve or Reject?}

    AdminDecision -->|Approve| VerificationApproved[Status: Verified]

    VerificationApproved --> UnlockFeatures[Unlock Community Features]

    UnlockFeatures --> Home

    AdminDecision -->|Reject| VerificationRejected[Status: Rejected]

    VerificationRejected --> ShowReason[Show Rejection Reason]

    ShowReason --> AllowResubmit[Allow Resubmission]

    AllowResubmit --> UploadDoc

    Settings --> ChangeLanguage[Change Language]

    ChangeLanguage --> UpdateUI[Update UI Language]

    UpdateUI --> Settings

    Settings --> ChangeCity[Change City]

    ChangeCity --> UpdateCity[Update City Preference]

    UpdateCity --> Settings

    Settings --> ChangeDietary[Change Dietary Filters]

    ChangeDietary --> UpdateDietary[Update Dietary Preferences]

    UpdateDietary --> Settings

    Settings --> ChangeInterests[Change Interests]

    ChangeInterests --> UpdateInterests[Update Interests]

    UpdateInterests --> Settings

    Settings --> NotificationSettings[Notification Settings]

    NotificationSettings --> UpdateNotifications[Update Notification Preferences]

    UpdateNotifications --> Settings

    Settings --> ViewVerification[View Verification Status]

    ViewVerification --> VerificationFlow

    Settings --> Support[Support/Feedback]

    Support --> SelectSupportCategory[Select Category]

    SelectSupportCategory --> DescribeIssue[Describe Issue]

    DescribeIssue --> SubmitSupport[Submit Support Request]

    SubmitSupport --> SupportConfirmation[Show Confirmation]

    SupportConfirmation --> Settings

    Settings --> ViewSaved[View Saved Items]

    ViewSaved --> Settings

    Settings --> ViewRSVPs[View My RSVPs]

    ViewRSVPs --> Settings

    Settings --> Logout[Logout]

    Logout --> Start

    ReportFlow[Report Flow] --> SelectReportReason[Select Report Reason]

    SelectReportReason --> AddReportDetails[Add Details]

    AddReportDetails --> CheckReportLimit{Rate Limited?}

    CheckReportLimit -->|Yes| ShowReportLimit[Show Report Limit]

    ShowReportLimit --> ReportFlow

    CheckReportLimit -->|No| SubmitReport[Submit Report]

    SubmitReport --> ReportQueued[Report Queued for Review]

    ReportQueued --> AdminModeration[Admin Moderation Queue]

    AdminModeration --> AdminAction{Admin Action}

    AdminAction -->|Remove Content| RemoveContent[Remove Content]

    AdminAction -->|Restrict User| RestrictUser[Restrict User]

    AdminAction -->|Ban User| BanUser[Ban User]

    AdminAction -->|Dismiss| DismissReport[Dismiss Report]

    RemoveContent --> LogAction[Log Audit Entry]

    RestrictUser --> LogAction

    BanUser --> LogAction

    DismissReport --> LogAction

    LogAction --> AdminModeration

    BlockFlow[Block Flow] --> ConfirmBlock{Confirm Block?}

    ConfirmBlock -->|No| CancelBlock[Cancel]

    CancelBlock --> Home

    ConfirmBlock -->|Yes| ExecuteBlock[Execute Block]

    ExecuteBlock --> RemoveInteractions[Remove All Interactions]

    RemoveInteractions --> HideProfile[Hide Profile]

    HideProfile --> PreventFuture[Prevent Future Matching]

    PreventFuture --> BlockComplete[Block Complete]

    BlockComplete --> Home

    AdminModeration --> ViewVerificationQueue[Verification Queue]

    ViewVerificationQueue --> ReviewDoc[Review Document]

    ReviewDoc --> AdminDecision

    AdminModeration --> ViewReportsQueue[Reports Queue]

    ViewReportsQueue --> ReviewReport[Review Report]

    ReviewReport --> AdminAction

    AdminModeration --> ViewSuggestionsQueue[Listing Suggestions Queue]

    ViewSuggestionsQueue --> ReviewSuggestion[Review Suggestion]

    ReviewSuggestion --> ApproveSuggestion{Approve?}

    ApproveSuggestion -->|Yes| PublishListing[Publish Listing]

    ApproveSuggestion -->|No| RejectSuggestion[Reject Suggestion]

    PublishListing --> LogAction

    RejectSuggestion --> LogAction

    AdminModeration --> ViewAuditLogs[View Audit Logs]

    ViewAuditLogs --> AdminModeration

    AdminModeration --> KillSwitches[Kill Switches]

    KillSwitches --> DisableFeature{Disable Feature?}

    DisableFeature -->|Daily Friend| DisableDailyFriend[Disable Daily Friend]

    DisableFeature -->|Help Me| DisableHelpMe[Disable Help Me]

    DisableDailyFriend --> LogAction

    DisableHelpMe --> LogAction

  