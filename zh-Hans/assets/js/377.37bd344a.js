"use strict";
exports.id = 377;
exports.ids = [377,9680];
exports.modules = {

/***/ 69680:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_breakout_rooms_manager: () => (/* binding */ DyteBreakoutRoomsManager)
/* harmony export */ });
/* harmony import */ var _index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65733);
/* harmony import */ var _index_29bc5d44_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20336);
/* harmony import */ var _default_icon_pack_a3227c63_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96633);
/* harmony import */ var _store_56e792d0_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46503);
/* harmony import */ var _breakout_rooms_def907fe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19656);
/* harmony import */ var _flags_33c46e09_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(27637);
/* harmony import */ var _livestream_8c64d895_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24555);








var __classPrivateFieldSet = ( false) || function (receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = ( false) || function (receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __rest = ( false) || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
var _DraftStateManager_instances, _DraftStateManager_hasLocalChanges, _DraftStateManager_state, _DraftStateManager_participantsNewMeetingMap, _DraftStateManager_participantsOldMeetingMap, _DraftStateManager_meetingParticipantsMap, _DraftStateManager_allParticipantsMap, _DraftStateManager_allMeetingsMap, _DraftStateManager_meetingsToUpdate, _DraftStateManager_meetingsToDelete, _DraftStateManager_init, _DraftStateManager_addNewMeetingToState, _DraftStateManager_addNewParticipantToState, _DraftStateManager_replaceDraftMeetingIds, _DraftStateManager_getMeetingParticipants;
class DraftStateManager {
  constructor() {
    _DraftStateManager_instances.add(this);
    _DraftStateManager_hasLocalChanges.set(this, false);
    _DraftStateManager_state.set(this, void 0);
    _DraftStateManager_participantsNewMeetingMap.set(this, void 0);
    _DraftStateManager_participantsOldMeetingMap.set(this, void 0);
    _DraftStateManager_meetingParticipantsMap.set(this, void 0);
    _DraftStateManager_allParticipantsMap.set(this, void 0);
    _DraftStateManager_allMeetingsMap.set(this, void 0);
    _DraftStateManager_meetingsToUpdate.set(this, void 0);
    _DraftStateManager_meetingsToDelete.set(this, void 0);
  }
  get hasLocalChanges() {
    return __classPrivateFieldGet(this, _DraftStateManager_hasLocalChanges, "f");
  }
  get currentState() {
    let parentMeeting;
    let meetings = [];
    Array.from(__classPrivateFieldGet(this, _DraftStateManager_meetingParticipantsMap, "f").keys()).forEach((meetingId) => {
      const meeting = __classPrivateFieldGet(this, _DraftStateManager_allMeetingsMap, "f").get(meetingId);
      if (meeting.isParent) {
        parentMeeting = Object.assign(Object.assign({}, meeting), { participants: __classPrivateFieldGet(this, _DraftStateManager_instances, "m", _DraftStateManager_getMeetingParticipants).call(this, meetingId) });
      }
      else {
        meetings.push(Object.assign(Object.assign({}, meeting), { participants: __classPrivateFieldGet(this, _DraftStateManager_instances, "m", _DraftStateManager_getMeetingParticipants).call(this, meetingId) }));
      }
    });
    return {
      parentMeeting,
      meetings,
    };
  }
  get allConnectedMeetings() {
    return this.currentState.meetings.sort((a, b) => a.title.localeCompare(b.title));
  }
  get allParticipants() {
    return Array.from(__classPrivateFieldGet(this, _DraftStateManager_allParticipantsMap, "f").values());
  }
  get unassignedParticipants() {
    return __classPrivateFieldGet(this, _DraftStateManager_instances, "m", _DraftStateManager_getMeetingParticipants).call(this, __classPrivateFieldGet(this, _DraftStateManager_state, "f").parentMeeting.id);
  }
  /**
   * get participants of a meeting
   */
  getParticipantsForMeeting(meetingId) {
    return __classPrivateFieldGet(this, _DraftStateManager_instances, "m", _DraftStateManager_getMeetingParticipants).call(this, meetingId);
  }
  /**
   * add a new connected meeting
   */
  addNewMeeting() {
    __classPrivateFieldSet(this, _DraftStateManager_hasLocalChanges, true, "f");
    const _a = (0,_breakout_rooms_def907fe_js__WEBPACK_IMPORTED_MODULE_4__.a)(), meeting = __rest(_a, ["participants"]);
    __classPrivateFieldGet(this, _DraftStateManager_instances, "m", _DraftStateManager_addNewMeetingToState).call(this, Object.assign(Object.assign({}, meeting), { isParent: false }));
    return meeting;
  }
  /**
   * add multiple new connected meetings
   */
  addNewMeetings(count) {
    return Array.from({ length: count }).map(() => this.addNewMeeting());
  }
  /**
   * update a meeting's title
   */
  updateMeetingTitle(meetingId, newTitle) {
    __classPrivateFieldGet(this, _DraftStateManager_allMeetingsMap, "f").get(meetingId).title = newTitle;
    if (!(0,_breakout_rooms_def907fe_js__WEBPACK_IMPORTED_MODULE_4__.i)(meetingId)) {
      __classPrivateFieldGet(this, _DraftStateManager_meetingsToUpdate, "f").add(meetingId);
    }
  }
  /**
   * deleteMeeting
   */
  deleteMeeting(meetingId) {
    __classPrivateFieldSet(this, _DraftStateManager_hasLocalChanges, true, "f");
    const meeting = __classPrivateFieldGet(this, _DraftStateManager_allMeetingsMap, "f").get(meetingId);
    const participants = __classPrivateFieldGet(this, _DraftStateManager_instances, "m", _DraftStateManager_getMeetingParticipants).call(this, meeting.id).map(_breakout_rooms_def907fe_js__WEBPACK_IMPORTED_MODULE_4__.p);
    this.assignParticipantsToMeeting(participants, __classPrivateFieldGet(this, _DraftStateManager_state, "f").parentMeeting.id);
    __classPrivateFieldGet(this, _DraftStateManager_allMeetingsMap, "f").delete(meeting.id);
    __classPrivateFieldGet(this, _DraftStateManager_meetingParticipantsMap, "f").delete(meeting.id);
    if (!(0,_breakout_rooms_def907fe_js__WEBPACK_IMPORTED_MODULE_4__.i)(meeting.id)) {
      __classPrivateFieldGet(this, _DraftStateManager_meetingsToDelete, "f").add(meeting.id);
    }
  }
  /**
   * assign participants to a meeting
   */
  assignParticipantsToMeeting(customParticipantIds, destinationMeetingId) {
    __classPrivateFieldSet(this, _DraftStateManager_hasLocalChanges, true, "f");
    customParticipantIds.forEach((participantId) => {
      const currentMeetingId = __classPrivateFieldGet(this, _DraftStateManager_participantsNewMeetingMap, "f").get(participantId);
      __classPrivateFieldGet(this, _DraftStateManager_meetingParticipantsMap, "f").get(currentMeetingId).delete(participantId);
      __classPrivateFieldGet(this, _DraftStateManager_meetingParticipantsMap, "f").get(destinationMeetingId).add(participantId);
      __classPrivateFieldGet(this, _DraftStateManager_participantsNewMeetingMap, "f").set(participantId, destinationMeetingId);
    });
    return this.currentState;
  }
  /**
   * assign participants randomly
   */
  assignParticipantsRandomly() {
    const splits = (0,_breakout_rooms_def907fe_js__WEBPACK_IMPORTED_MODULE_4__.s)(this.unassignedParticipants, this.allConnectedMeetings.length);
    this.allConnectedMeetings.forEach((meeting, index) => {
      const toAssign = splits[index];
      if (toAssign && toAssign.length !== 0) {
        this.assignParticipantsToMeeting(toAssign.map((participant) => participant.customParticipantId), meeting.id);
      }
    });
    return this.currentState;
  }
  /**
   * unassign participants
   */
  unassignParticipants(customParticipantIds) {
    const destinationMeetingId = __classPrivateFieldGet(this, _DraftStateManager_state, "f").parentMeeting.id;
    return this.assignParticipantsToMeeting(customParticipantIds, destinationMeetingId);
  }
  /**
   * unassign all participants
   */
  unassignAllParticipants() {
    const destinationMeetingId = __classPrivateFieldGet(this, _DraftStateManager_state, "f").parentMeeting.id;
    const customParticipantIds = this.allParticipants.map(_breakout_rooms_def907fe_js__WEBPACK_IMPORTED_MODULE_4__.p);
    return this.assignParticipantsToMeeting(customParticipantIds, destinationMeetingId);
  }
  /**
   * update current state
   */
  updateCurrentState(state) {
    if (!__classPrivateFieldGet(this, _DraftStateManager_hasLocalChanges, "f")) {
      __classPrivateFieldGet(this, _DraftStateManager_instances, "m", _DraftStateManager_init).call(this, state);
    }
    [state.parentMeeting, ...state.meetings].forEach((meeting, index) => {
      const draftMeeting = Object.assign(Object.assign({}, meeting), { isParent: index === 0 });
      __classPrivateFieldGet(this, _DraftStateManager_instances, "m", _DraftStateManager_addNewMeetingToState).call(this, draftMeeting);
      meeting.participants.forEach((participant) => {
        __classPrivateFieldGet(this, _DraftStateManager_instances, "m", _DraftStateManager_addNewParticipantToState).call(this, participant, draftMeeting);
      });
    });
  }
  get meetingsToCreate() {
    return this.allConnectedMeetings
      .filter((meeting) => (0,_breakout_rooms_def907fe_js__WEBPACK_IMPORTED_MODULE_4__.i)(meeting.id))
      .map(({ id, title }) => ({ id, title }));
  }
  get meetingsToUpdate() {
    return this.allConnectedMeetings
      .filter((meeting) => __classPrivateFieldGet(this, _DraftStateManager_meetingsToUpdate, "f").has(meeting.id))
      .map(({ id, title }) => ({ id, title }));
  }
  get meetingsToDelete() {
    return Array.from(__classPrivateFieldGet(this, _DraftStateManager_meetingsToDelete, "f"));
  }
  get participantsToMove() {
    // gather participants
    const moveMap = new Map();
    Array.from(__classPrivateFieldGet(this, _DraftStateManager_participantsNewMeetingMap, "f").keys()).forEach((participantId) => {
      const sourceMeetingId = __classPrivateFieldGet(this, _DraftStateManager_participantsOldMeetingMap, "f").get(participantId);
      const destinationMeetingId = __classPrivateFieldGet(this, _DraftStateManager_participantsNewMeetingMap, "f").get(participantId);
      if (sourceMeetingId === destinationMeetingId)
        return;
      const key = `${sourceMeetingId}__${destinationMeetingId}`;
      if (!moveMap.has(key)) {
        moveMap.set(key, []);
      }
      const participantDetails = __classPrivateFieldGet(this, _DraftStateManager_allParticipantsMap, "f").get(participantId);
      moveMap.get(key).push(participantDetails.id);
    });
    return Array.from(moveMap.keys()).map((key) => {
      const [sourceMeetingId, destinationMeetingId] = key.split('__');
      return {
        sourceMeetingId,
        destinationMeetingId,
        participantIds: moveMap.get(key),
      };
    });
  }
  async applyChanges(meeting) {
    // create new rooms
    const createMeetingsPromise = this.meetingsToCreate.length !== 0
      ? meeting.connectedMeetings.createMeetings(this.meetingsToCreate)
      : Promise.resolve([]);
    // update old rooms titles
    const updateMeetingsPromise = this.meetingsToUpdate.length !== 0
      ? meeting.connectedMeetings.updateMeetings(this.meetingsToUpdate)
      : Promise.resolve();
    const [createMeetingsResponse] = await Promise.all([
      createMeetingsPromise,
      updateMeetingsPromise,
    ]);
    // replace temporary ids
    if (createMeetingsResponse) {
      createMeetingsResponse.forEach((meeting) => {
        this.meetingsToCreate.forEach((draftMeeting) => {
          if (draftMeeting.title === meeting.title) {
            __classPrivateFieldGet(this, _DraftStateManager_instances, "m", _DraftStateManager_replaceDraftMeetingIds).call(this, __classPrivateFieldGet(this, _DraftStateManager_allMeetingsMap, "f").get(draftMeeting.id), meeting.id);
          }
        });
      });
    }
    // move participants (no async)
    if (this.participantsToMove.length !== 0) {
      this.participantsToMove.forEach(({ sourceMeetingId, destinationMeetingId, participantIds }) => {
        meeting.connectedMeetings.moveParticipants(sourceMeetingId, destinationMeetingId, participantIds);
      });
    }
    // delete rooms
    if (this.meetingsToDelete.length !== 0) {
      meeting.connectedMeetings.deleteMeetings(this.meetingsToDelete);
    }
  }
  /**
   * discard local changes
   */
  discardChanges() {
    __classPrivateFieldSet(this, _DraftStateManager_hasLocalChanges, false, "f");
    this.updateCurrentState(__classPrivateFieldGet(this, _DraftStateManager_state, "f"));
    return this.currentState;
  }
}
_DraftStateManager_hasLocalChanges = new WeakMap(), _DraftStateManager_state = new WeakMap(), _DraftStateManager_participantsNewMeetingMap = new WeakMap(), _DraftStateManager_participantsOldMeetingMap = new WeakMap(), _DraftStateManager_meetingParticipantsMap = new WeakMap(), _DraftStateManager_allParticipantsMap = new WeakMap(), _DraftStateManager_allMeetingsMap = new WeakMap(), _DraftStateManager_meetingsToUpdate = new WeakMap(), _DraftStateManager_meetingsToDelete = new WeakMap(), _DraftStateManager_instances = new WeakSet(), _DraftStateManager_init = function _DraftStateManager_init(state) {
  __classPrivateFieldSet(this, _DraftStateManager_state, state, "f");
  __classPrivateFieldSet(this, _DraftStateManager_allMeetingsMap, new Map(), "f");
  __classPrivateFieldSet(this, _DraftStateManager_allParticipantsMap, new Map(), "f");
  __classPrivateFieldSet(this, _DraftStateManager_meetingsToUpdate, new Set(), "f");
  __classPrivateFieldSet(this, _DraftStateManager_meetingsToDelete, new Set(), "f");
  __classPrivateFieldSet(this, _DraftStateManager_meetingParticipantsMap, new Map(), "f");
  __classPrivateFieldSet(this, _DraftStateManager_participantsNewMeetingMap, new Map(), "f");
  __classPrivateFieldSet(this, _DraftStateManager_participantsOldMeetingMap, new Map(), "f");
  __classPrivateFieldSet(this, _DraftStateManager_participantsOldMeetingMap, new Map(), "f");
  __classPrivateFieldGet(this, _DraftStateManager_state, "f").parentMeeting.participants.forEach((participant) => {
    __classPrivateFieldGet(this, _DraftStateManager_participantsOldMeetingMap, "f").set((0,_breakout_rooms_def907fe_js__WEBPACK_IMPORTED_MODULE_4__.p)(participant), __classPrivateFieldGet(this, _DraftStateManager_state, "f").parentMeeting.id);
  });
  __classPrivateFieldGet(this, _DraftStateManager_state, "f").meetings.forEach((meeting) => {
    meeting.participants.forEach((participant) => {
      __classPrivateFieldGet(this, _DraftStateManager_participantsOldMeetingMap, "f").set((0,_breakout_rooms_def907fe_js__WEBPACK_IMPORTED_MODULE_4__.p)(participant), meeting.id);
    });
  });
}, _DraftStateManager_addNewMeetingToState = function _DraftStateManager_addNewMeetingToState(meeting) {
  if (!__classPrivateFieldGet(this, _DraftStateManager_allMeetingsMap, "f").has(meeting.id)) {
    __classPrivateFieldGet(this, _DraftStateManager_allMeetingsMap, "f").set(meeting.id, meeting);
    __classPrivateFieldGet(this, _DraftStateManager_meetingParticipantsMap, "f").set(meeting.id, new Set());
  }
}, _DraftStateManager_addNewParticipantToState = function _DraftStateManager_addNewParticipantToState(participant, meeting) {
  if (__classPrivateFieldGet(this, _DraftStateManager_allParticipantsMap, "f").has((0,_breakout_rooms_def907fe_js__WEBPACK_IMPORTED_MODULE_4__.p)(participant))) {
    return;
  }
  __classPrivateFieldGet(this, _DraftStateManager_allParticipantsMap, "f").set((0,_breakout_rooms_def907fe_js__WEBPACK_IMPORTED_MODULE_4__.p)(participant), participant);
  __classPrivateFieldGet(this, _DraftStateManager_participantsNewMeetingMap, "f").set((0,_breakout_rooms_def907fe_js__WEBPACK_IMPORTED_MODULE_4__.p)(participant), meeting.id);
  __classPrivateFieldGet(this, _DraftStateManager_meetingParticipantsMap, "f").get(meeting.id).add((0,_breakout_rooms_def907fe_js__WEBPACK_IMPORTED_MODULE_4__.p)(participant));
}, _DraftStateManager_replaceDraftMeetingIds = function _DraftStateManager_replaceDraftMeetingIds(draftMeeting, realId) {
  const draftId = draftMeeting.id;
  __classPrivateFieldGet(this, _DraftStateManager_instances, "m", _DraftStateManager_addNewMeetingToState).call(this, Object.assign(Object.assign({}, draftMeeting), { id: realId }));
  __classPrivateFieldGet(this, _DraftStateManager_allMeetingsMap, "f").delete(draftId);
  const participantSet = __classPrivateFieldGet(this, _DraftStateManager_meetingParticipantsMap, "f").get(draftId);
  __classPrivateFieldGet(this, _DraftStateManager_meetingParticipantsMap, "f").set(realId, participantSet);
  __classPrivateFieldGet(this, _DraftStateManager_meetingParticipantsMap, "f").delete(draftId);
  Array.from(__classPrivateFieldGet(this, _DraftStateManager_participantsNewMeetingMap, "f").keys()).forEach((participantId) => {
    if (__classPrivateFieldGet(this, _DraftStateManager_participantsNewMeetingMap, "f").get(participantId) === draftId) {
      __classPrivateFieldGet(this, _DraftStateManager_participantsNewMeetingMap, "f").set(participantId, realId);
    }
  });
}, _DraftStateManager_getMeetingParticipants = function _DraftStateManager_getMeetingParticipants(meetingId) {
  const participantIds = Array.from(__classPrivateFieldGet(this, _DraftStateManager_meetingParticipantsMap, "f").get(meetingId));
  return participantIds.map((id) => __classPrivateFieldGet(this, _DraftStateManager_allParticipantsMap, "f").get(id));
};

const dyteBreakoutRoomsManagerCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}.color-brand{--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-300, 73 124 253) / var(--tw-text-opacity))}.color-danger{--tw-text-opacity:1;color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-text-opacity))}.loading-content{height:var(--dyte-space-60, 240px);width:var(--dyte-space-96, 384px);padding:var(--dyte-space-9, 36px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / var(--tw-bg-opacity));display:flex;align-items:center;justify-content:center}.room-config{overflow:hidden;border-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / var(--tw-bg-opacity));display:flex;flex-direction:column;width:var(--dyte-space-96, 384px);padding-left:var(--dyte-space-9, 36px);padding-right:var(--dyte-space-9, 36px);padding-top:var(--dyte-space-10, 40px);padding-bottom:var(--dyte-space-10, 40px)}header{margin-bottom:var(--dyte-space-8, 32px);display:flex;align-items:center;gap:var(--dyte-space-2, 8px);font-size:24px;font-weight:600}header dyte-icon{height:var(--dyte-space-7, 28px);width:var(--dyte-space-7, 28px)}.create-room{margin-bottom:var(--dyte-space-4, 16px);display:flex;align-items:center;gap:var(--dyte-space-3, 12px);width:100%}.create-room p{margin:var(--dyte-space-0, 0px);margin-bottom:var(--dyte-space-1, 4px);font-size:16px}.distribution-hint{margin-bottom:var(--dyte-space-8, 32px);font-size:14px;font-weight:400;color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52))}.distribution-hint em{font-style:normal;color:rgb(var(--dyte-colors-text-800, 255 255 255 / 0.76))}footer{display:flex;flex-direction:row;vertical-align:middle;justify-content:center}footer dyte-button{width:100%;color:rgb(var(--dyte-colors-text-1000, 255 255 255))}label{margin-bottom:var(--dyte-space-3, 12px);font-weight:400;color:rgb(var(--dyte-colors-text-1000, 255 255 255));opacity:0.4}.participant-config-wrapper{width:850px;height:595px;max-width:100%;max-height:100%;border-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity));display:flex;flex-direction:column}.participant-config-actions{display:flex;justify-content:space-between;padding-left:var(--dyte-space-8, 32px);padding-right:var(--dyte-space-8, 32px);padding-top:var(--dyte-space-5, 20px);padding-bottom:var(--dyte-space-5, 20px);border-bottom-right-radius:var(--dyte-border-radius-md, 8px);border-bottom-left-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / var(--tw-bg-opacity))}.participant-config{display:flex;flex-grow:1;flex-direction:row;overflow:hidden}aside{box-sizing:border-box;display:flex;width:var(--dyte-space-96, 384px);flex-grow:1;flex-direction:column;padding-left:var(--dyte-space-8, 32px);padding-right:var(--dyte-space-4, 16px);border-right-width:var(--dyte-border-width-sm, 1px);border-top-width:var(--dyte-border-width-none, 0);border-bottom-width:var(--dyte-border-width-none, 0);border-left-width:var(--dyte-border-width-none, 0);border-style:solid;--tw-border-opacity:1;border-right-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-border-opacity))}aside header{margin-bottom:var(--dyte-space-4, 16px);width:100%;padding-left:var(--dyte-space-0, 0px);padding-right:var(--dyte-space-0, 0px);padding-top:var(--dyte-space-8, 32px);font-size:20px;font-weight:500;line-height:2rem}.shuffle-button{display:flex;flex-direction:row;align-items:center}.shuffle-button dyte-icon{height:var(--dyte-space-8, 32px)}.participants-assign-actions{display:flex;flex-direction:row;align-items:center;justify-content:space-between;font-size:14px;padding-left:var(--dyte-space-8, 32px);padding-right:var(--dyte-space-2, 8px);margin-left:calc(var(--dyte-space-8, 32px) * -1);margin-right:calc(var(--dyte-space-4, 16px) * -1);padding-top:var(--dyte-space-0\\.5, 2px);padding-bottom:var(--dyte-space-0\\.5, 2px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity))}.participants-assign-actions .deselect-button{height:var(--dyte-space-6, 24px)}.participants-assign-actions .deselect-button:hover{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity))}.assign-rooms{padding:var(--dyte-space-8, 32px);display:flex;width:100%;flex-direction:column}.assign-rooms .disabled{opacity:0.2}.assign-rooms .back{display:flex;cursor:pointer;flex-direction:row;align-items:center;justify-content:flex-start;padding:var(--dyte-space-4, 16px);padding-bottom:var(--dyte-space-0, 0px);font-size:14px;color:rgb(var(--dyte-colors-text-800, 255 255 255 / 0.76))}.assign-rooms .back dyte-icon{height:var(--dyte-space-5, 20px)}.assign-rooms .row{display:flex;flex-direction:row;align-items:center;justify-content:flex-start;gap:var(--dyte-space-3, 12px);margin-bottom:var(--dyte-space-4, 16px);font-size:14px}.assign-rooms .row-header{margin:var(--dyte-space-0, 0px);font-size:16px;line-height:2rem}.assign-rooms .cta-buttons{display:flex;align-items:center;justify-content:flex-start;gap:var(--dyte-space-2, 8px)}.assign-rooms .cta-buttons dyte-button div{display:flex;flex-direction:row;align-items:center}.assign-rooms .cta-buttons dyte-button div dyte-icon{height:var(--dyte-space-4, 16px);width:var(--dyte-space-4, 16px)}.rooms{margin-bottom:var(--dyte-space-2, 8px);padding-right:var(--dyte-space-1, 4px);display:flex;flex-grow:1;flex-direction:column;gap:var(--dyte-space-2, 8px);overflow-y:auto;max-height:500px}.rooms::-webkit-scrollbar{width:var(--dyte-space-1\\.5, 6px);border-radius:var(--dyte-border-radius-sm, 4px)}.rooms::-webkit-scrollbar-thumb{border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity))}.rooms::-webkit-scrollbar-track{border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity))}.breakout-actions{display:flex;flex-direction:row;align-items:center;justify-content:flex-end;gap:var(--dyte-space-2, 8px)}.breakout-actions .start-breakout-button{color:rgb(var(--dyte-colors-text-1000, 255 255 255))}.breakout-actions .close-breakout-button{color:rgb(var(--dyte-colors-text-1000, 255 255 255));--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-bg-opacity))}.breakout-actions .update-breakout-button{background-color:transparent;--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-text-opacity));border-width:var(--dyte-border-width-sm, 1px);border-style:solid;--tw-border-opacity:1;border-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-border-opacity))}.status-bar{display:flex;align-items:center;font-size:14px;color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64));width:var(--dyte-space-80, 320px)}.ephemeral-status{--tw-text-opacity:1;color:rgba(var(--dyte-colors-success, 98 165 4) / var(--tw-text-opacity))}.ephemeral-status dyte-icon{height:var(--dyte-space-4, 16px);width:var(--dyte-space-4, 16px)}.room-switcher-container{border-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / var(--tw-bg-opacity));width:468px;padding:var(--dyte-space-8, 32px)}.add-room-jumbo-btn div{display:flex;align-items:center;gap:var(--dyte-space-1, 4px);font-size:14px;--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-300, 73 124 253) / var(--tw-text-opacity))}.add-room-jumbo-btn div dyte-icon{height:var(--dyte-space-4, 16px);width:var(--dyte-space-4, 16px)}.br-primary-btn:not([disabled]){--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity))}.br-primary-btn:not([disabled]):hover{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-600, 13 81 253) / var(--tw-bg-opacity))}.br-secondary-btn:not([disabled]){--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity))}.br-secondary-btn:not([disabled]):hover{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity))}";

const MIN_ROOMS = 1;
const DyteBreakoutRoomsManager = class {
  constructor(hostRef) {
    (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.stateUpdate = (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteStateUpdate", 7);
    this.updateLocalState = (payload) => {
      this.stateManager.updateCurrentState(payload);
      this.draftState = this.stateManager.currentState;
      if (this.meeting.connectedMeetings.isActive) {
        this.roomConfig = Object.assign(Object.assign({}, this.roomConfig), { mode: 'edit' });
      }
      if (this.roomConfig.mode === 'create' && !this.meeting.connectedMeetings.isActive) {
        (0,_breakout_rooms_def907fe_js__WEBPACK_IMPORTED_MODULE_4__.r)();
      }
      if (['edit', 'view'].includes(this.roomConfig.mode)) {
        this.roomConfig = Object.assign(Object.assign({}, this.roomConfig), { rooms: payload.meetings.length, step: 'participants-config' });
        this.selectedParticipants = [];
      }
    };
    this.onAddNewRoom = () => {
      this.stateManager.addNewMeeting();
      this.draftState = this.stateManager.currentState;
      this.selectorRef.scrollTo({ top: this.selectorRef.scrollHeight, behavior: 'smooth' });
    };
    this.onRoomUpdate = (event) => {
      const { detail } = event;
      this.stateManager.updateMeetingTitle(detail.id, detail.title);
      this.draftState = this.stateManager.currentState;
    };
    this.onRoomDelete = (id) => {
      const toDelete = this.stateManager.allConnectedMeetings.find((meeting) => meeting.id === id);
      if (toDelete) {
        this.stateManager.deleteMeeting(id);
        this.draftState = this.stateManager.currentState;
      }
    };
    this.unassignParticipant = (id) => {
      this.stateManager.unassignParticipants([id]);
      this.draftState = this.stateManager.currentState;
    };
    this.onUnassignAll = () => {
      this.stateManager.unassignAllParticipants();
      this.draftState = this.stateManager.currentState;
    };
    this.assignParticipantsToRoom = (destinationMeetingId) => {
      if (this.selectedParticipants.length === 0 || this.assigningParticipants == false)
        return;
      this.stateManager.assignParticipantsToMeeting(this.selectedParticipants, destinationMeetingId);
      this.draftState = this.stateManager.currentState;
      this.selectedParticipants = [];
      this.assigningParticipants = false;
      this.setEphemeralStatus(this.t('breakout_rooms.ephemeral_status.participants_assigned'));
    };
    this.handleClose = (stateUpdate, store) => {
      stateUpdate.emit({
        activeBreakoutRoomsManager: {
          active: true,
        },
      });
      store.activeBreakoutRoomsManager = {
        active: true,
      };
    };
    this.enableConfirmationModal = (modalType = 'start-breakout') => {
      let activeConfirmationModal = {
        active: true,
        header: 'breakout_rooms.confirm_modal.start_breakout.header',
        content: 'breakout_rooms.confirm_modal.start_breakout.content',
        variant: 'primary',
        cancelText: 'breakout_rooms.confirm_modal.start_breakout.cancelText',
        ctaText: 'breakout_rooms.confirm_modal.start_breakout.ctaText',
        onClick: () => this.applyChanges(),
        onClose: this.handleClose,
      };
      if (modalType === 'close-breakout') {
        activeConfirmationModal = {
          active: true,
          header: 'breakout_rooms.confirm_modal.close_breakout.header',
          content: 'breakout_rooms.confirm_modal.close_breakout.content',
          variant: 'danger',
          cancelText: 'cancel',
          ctaText: 'breakout_rooms.confirm_modal.close_breakout.ctaText',
          onClick: () => this.closeBreakout(),
          onClose: this.handleClose,
        };
      }
      this.stateUpdate.emit({
        activeBreakoutRoomsManager: { active: false },
        activeConfirmationModal,
      });
      _store_56e792d0_js__WEBPACK_IMPORTED_MODULE_3__.s.activeBreakoutRoomsManager = { active: false };
      _store_56e792d0_js__WEBPACK_IMPORTED_MODULE_3__.s.activeConfirmationModal = activeConfirmationModal;
    };
    this.close = () => {
      var _a;
      this.stateManager.discardChanges();
      (_a = this.stateUpdate) === null || _a === void 0 ? void 0 : _a.emit({
        activeBreakoutRoomsManager: {
          active: false,
        },
      });
      _store_56e792d0_js__WEBPACK_IMPORTED_MODULE_3__.s.activeBreakoutRoomsManager = { active: false };
    };
    this.applyChanges = async () => {
      this.roomConfig = Object.assign(Object.assign({}, this.roomConfig), { applyingChanges: true });
      await this.stateManager.applyChanges(this.meeting);
      this.close();
      this.roomConfig = Object.assign(Object.assign({}, this.roomConfig), { applyingChanges: false });
    };
    this.loading = false;
    this.roomConfig = {
      rooms: 2,
      step: 'room-config',
      mode: 'create',
      applyingChanges: false,
    };
    this.draftState = undefined;
    this.assigningParticipants = false;
    this.selectedParticipants = [];
    this.ephemeralStatusText = '';
    this.isDragMode = false;
    this.meeting = undefined;
    this.states = undefined;
    this.iconPack = _default_icon_pack_a3227c63_js__WEBPACK_IMPORTED_MODULE_2__.d;
    this.t = (0,_index_29bc5d44_js__WEBPACK_IMPORTED_MODULE_1__.u)();
  }
  onSelectedParticipantsChanged(participants) {
    if (participants.length > 0)
      this.assigningParticipants = true;
    else
      this.assigningParticipants = false;
  }
  connectedCallback() {
    this.permissions = this.meeting.self.permissions.connectedMeetings;
    this.meeting.connectedMeetings.on('stateUpdate', this.updateLocalState);
    this.meeting.connectedMeetings.on('changingMeeting', this.close);
    this.stateManager = new DraftStateManager();
    this.fetchRoomState();
  }
  disconnectedCallback() {
    this.meeting.connectedMeetings.off('stateUpdate', this.updateLocalState);
    this.meeting.connectedMeetings.off('changingMeeting', this.close);
  }
  async fetchRoomState() {
    this.loading = true;
    await this.meeting.connectedMeetings.getConnectedMeetings();
    this.loading = false;
  }
  setEphemeralStatus(text) {
    this.ephemeralStatusText = text;
    setTimeout(() => {
      this.ephemeralStatusText = '';
    }, 3000);
  }
  onCreateRooms() {
    this.selectedParticipants = [];
    this.stateManager.addNewMeetings(this.roomConfig.rooms);
    this.draftState = this.stateManager.currentState;
    // move to next step -> participants-config
    this.roomConfig = Object.assign(Object.assign({}, this.roomConfig), { step: 'participants-config' });
  }
  onParticipantDelete(event) {
    const { detail } = event;
    const id = (0,_breakout_rooms_def907fe_js__WEBPACK_IMPORTED_MODULE_4__.p)(detail);
    if (id == null)
      return;
    this.unassignParticipant(id);
  }
  toggleDragMode(e) {
    this.isDragMode = e.detail;
  }
  assignParticipantsRandomly() {
    if (this.stateManager.unassignedParticipants.length === 0)
      return;
    this.stateManager.assignParticipantsRandomly();
    this.draftState = this.stateManager.currentState;
    this.setEphemeralStatus(this.t('breakout_rooms.ephemeral_status.participants_assigned_randomly'));
  }
  async joinRoom(destinationMeetingId) {
    const participantId = (0,_breakout_rooms_def907fe_js__WEBPACK_IMPORTED_MODULE_4__.p)(this.meeting.self);
    this.stateManager.assignParticipantsToMeeting([participantId], destinationMeetingId);
    await this.applyChanges();
  }
  async closeBreakout() {
    this.stateManager.allConnectedMeetings.forEach((meeting) => this.stateManager.deleteMeeting(meeting.id));
    await this.applyChanges();
  }
  updateSelectedParticipants(e) {
    this.selectedParticipants = e.detail;
  }
  updateAllParticipants(e) {
    this.selectedParticipants = e.detail;
  }
  getStatusText() {
    if (this.ephemeralStatusText !== '')
      return this.ephemeralStatusText;
    let statusText = '';
    if (this.roomConfig.mode === 'create') {
      statusText = this.t('breakout_rooms.status.assign_multiple');
      if (this.selectedParticipants.length !== 0) {
        statusText = this.t('breakout_rooms.status.select_room');
      }
    }
    return statusText;
  }
  getApproxDistribution() {
    const num = this.stateManager.unassignedParticipants.length / (this.roomConfig.rooms || MIN_ROOMS);
    return Math.max(MIN_ROOMS, Math.round(num));
  }
  deselectAll() {
    this.selectedParticipants = [];
  }
  async discardChanges() {
    this.stateManager.discardChanges();
    await this.fetchRoomState();
    this.setEphemeralStatus(this.t('breakout_rooms.ephemeral_status.changes_discarded'));
  }
  shouldShowOnlyRoomSwitcher() {
    return this.permissions.canAlterConnectedMeetings === false;
  }
  getPermittedRooms() {
    if (this.permissions.canAlterConnectedMeetings || this.permissions.canSwitchConnectedMeetings) {
      return this.stateManager.allConnectedMeetings;
    }
    return this.stateManager.allConnectedMeetings.filter((cMeeting) => cMeeting.id === this.meeting.meta.roomName);
  }
  renderMainRoomMaybe() {
    if (!(this.meeting.connectedMeetings.isActive && this.permissions.canSwitchToParentMeeting)) {
      return null;
    }
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-breakout-room-manager", { key: this.stateManager.currentState.parentMeeting['id'], assigningParticipants: this.assigningParticipants, isDragMode: this.isDragMode, meeting: this.meeting, mode: this.roomConfig.mode, onParticipantsAdd: () => this.assignParticipantsToRoom(this.stateManager.currentState.parentMeeting['id']), onRoomJoin: () => this.joinRoom(this.stateManager.currentState.parentMeeting['id']), onUpdate: this.onRoomUpdate, states: this.states, room: Object.assign({}, this.stateManager.currentState.parentMeeting), iconPack: this.iconPack, t: this.t }));
  }
  renderRoomSwitcher() {
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "room-switcher-container" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("header", null, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.breakout_rooms }), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, this.t('breakout_rooms.join_breakout_header'))), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "rooms", ref: (el) => (this.selectorRef = el) }, this.renderMainRoomMaybe(), this.getPermittedRooms().map((room, idx) => {
      return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-breakout-room-manager", { key: room['id'], assigningParticipants: this.assigningParticipants, isDragMode: this.isDragMode, defaultExpanded: idx === 0, meeting: this.meeting, mode: this.roomConfig.mode, onDelete: () => this.onRoomDelete(room['id']), onParticipantsAdd: () => this.assignParticipantsToRoom(room['id']), onRoomJoin: () => this.joinRoom(room['id']), states: this.states, room: Object.assign({}, room), iconPack: this.iconPack, t: this.t, allowDelete: false }));
    })))));
  }
  renderLoading() {
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "loading-content" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-spinner", { size: "xl" }))));
  }
  renderRoomConfig() {
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "room-config" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("header", null, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.breakout_rooms }), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, this.t('breakout_rooms.room_config_header'))), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "create-room" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, this.t('breakout_rooms.num_of_rooms')), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-counter", { value: this.roomConfig.rooms, minValue: MIN_ROOMS, iconPack: this.iconPack, t: this.t, onValueChange: (val) => {
        this.roomConfig = Object.assign(Object.assign({}, this.roomConfig), { rooms: Math.max(+val.detail, MIN_ROOMS) });
      } })), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "distribution-hint" }, `${this.t('breakout_rooms.approx')}${' '}`, ' ', (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("em", null, this.getApproxDistribution(), " ", this.t('breakout_rooms.participants_per_room')), ' ', this.t('breakout_rooms.division_text')), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("footer", null, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { kind: "button", iconPack: this.iconPack, t: this.t, size: "lg", title: this.t('create'), disabled: this.roomConfig.rooms === 0, onClick: () => this.onCreateRooms() }, this.t('create'))))));
  }
  render() {
    if (this.loading) {
      return this.renderLoading();
    }
    if (this.shouldShowOnlyRoomSwitcher()) {
      return this.renderRoomSwitcher();
    }
    if (this.roomConfig.step === 'room-config') {
      return this.renderRoomConfig();
    }
    // participant config
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "participant-config-wrapper" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "participant-config" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("aside", { part: "menu" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("header", null, this.t('breakout_rooms.assign_participants')), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-breakout-room-participants", { meeting: this.meeting, iconPack: this.iconPack, t: this.t, participantIds: this.stateManager.unassignedParticipants.map(_breakout_rooms_def907fe_js__WEBPACK_IMPORTED_MODULE_4__.p), selectedParticipantIds: this.selectedParticipants }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-tooltip", { label: this.t('breakout_rooms.shuffle_participants'), iconPack: this.iconPack, t: this.t, slot: "shuffle-button" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { disabled: this.roomConfig.mode === 'edit' ||
        this.stateManager.unassignedParticipants.length === 0, iconPack: this.iconPack, t: this.t, kind: "button", variant: "secondary", size: "md", onClick: () => this.assignParticipantsRandomly(), class: "shuffle-button br-primary-btn" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.shuffle, iconPack: this.iconPack, t: this.t })))), this.selectedParticipants.length !== 0 && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "participants-assign-actions" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, `${this.selectedParticipants.length} ${this.t('breakout_rooms.selected')}`), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { disabled: this.roomConfig.mode === 'edit', iconPack: this.iconPack, t: this.t, kind: "button", variant: "ghost", size: "md", onClick: () => this.deselectAll(), class: "deselect-button color-danger" }, this.t('breakout_rooms.deselect'))))), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "assign-rooms" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "row" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", { class: "row-header" }, this.t('breakout_rooms.rooms'), " (", this.stateManager.allConnectedMeetings.length, ")"), !this.assigningParticipants && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "cta-buttons" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { kind: "button", variant: "secondary", iconPack: this.iconPack, t: this.t, class: "br-primary-btn" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { onClick: this.onAddNewRoom }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.add, iconPack: this.iconPack, t: this.t }), this.t('breakout_rooms.add_room'))), this.stateManager.allConnectedMeetings.flatMap((m) => m.participants)
      .length !== 0 && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { kind: "button", variant: "ghost", onClick: this.onUnassignAll, iconPack: this.iconPack, t: this.t }, this.t('breakout_rooms.unassign_all')))))), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "rooms", ref: (el) => (this.selectorRef = el) }, this.renderMainRoomMaybe(), this.getPermittedRooms().map((room, idx) => {
      return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-breakout-room-manager", { key: room['id'], assigningParticipants: this.assigningParticipants, isDragMode: this.isDragMode, defaultExpanded: idx === 0, meeting: this.meeting, mode: this.roomConfig.mode, onDelete: () => this.onRoomDelete(room['id']), onParticipantsAdd: () => this.assignParticipantsToRoom(room['id']), onRoomJoin: () => this.joinRoom(room['id']), onUpdate: this.onRoomUpdate, states: this.states, room: Object.assign({}, room), iconPack: this.iconPack, t: this.t, allowDelete: this.stateManager.allConnectedMeetings.length > MIN_ROOMS }));
    }), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { kind: "button", variant: "secondary", iconPack: this.iconPack, t: this.t, onClick: this.onAddNewRoom, class: "add-room-jumbo-btn br-secondary-btn" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.add, iconPack: this.iconPack, t: this.t }), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, this.t('breakout_rooms.add_room_brief'))))))), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "participant-config-actions" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: { 'status-bar': true, 'ephemeral-status': this.ephemeralStatusText !== '' } }, this.ephemeralStatusText !== '' && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.checkmark, iconPack: this.iconPack, t: this.t })), this.getStatusText()), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "breakout-actions" }, this.roomConfig.mode === 'create' && this.permissions.canAlterConnectedMeetings && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { size: "md", iconPack: this.iconPack, t: this.t, class: "start-breakout-button", onClick: () => this.enableConfirmationModal('start-breakout') }, this.t('breakout_rooms.start_breakout'))), this.roomConfig.mode === 'edit' &&
      this.stateManager.hasLocalChanges &&
      this.permissions.canAlterConnectedMeetings && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { size: "md", iconPack: this.iconPack, t: this.t, class: "color-danger", variant: "ghost", onClick: () => this.discardChanges() }, this.t('breakout_rooms.discard_changes'))), this.roomConfig.mode === 'edit' &&
      this.stateManager.hasLocalChanges &&
      this.permissions.canAlterConnectedMeetings && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { size: "md", iconPack: this.iconPack, t: this.t, class: "update-breakout-button", onClick: this.applyChanges }, this.t('breakout_rooms.update_breakout'))), this.roomConfig.mode === 'edit' &&
      !this.stateManager.hasLocalChanges &&
      this.permissions.canAlterConnectedMeetings && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { size: "md", iconPack: this.iconPack, t: this.t, class: "close-breakout-button", onClick: () => this.enableConfirmationModal('close-breakout') }, this.t('breakout_rooms.close_breakout'))))))));
  }
  static get watchers() { return {
    "selectedParticipants": ["onSelectedParticipantsChanged"]
  }; }
};
DyteBreakoutRoomsManager.style = dyteBreakoutRoomsManagerCss;




/***/ }),

/***/ 65733:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ Fragment),
/* harmony export */   H: () => (/* binding */ Host),
/* harmony export */   a: () => (/* binding */ getRenderingRef),
/* harmony export */   c: () => (/* binding */ createEvent),
/* harmony export */   f: () => (/* binding */ forceUpdate),
/* harmony export */   g: () => (/* binding */ getElement),
/* harmony export */   h: () => (/* binding */ h),
/* harmony export */   r: () => (/* binding */ registerInstance),
/* harmony export */   w: () => (/* binding */ writeTask)
/* harmony export */ });
/* unused harmony exports b, p */
const NAMESPACE = 'dyte-ui-kit';

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/snabbdom/snabbdom/blob/master/LICENSE
 *
 * Modified for Stencil's renderer and slot projection
 */
let scopeId;
let contentRef;
let hostTagName;
let useNativeShadowDom = false;
let checkSlotFallbackVisibility = false;
let checkSlotRelocate = false;
let isSvgMode = false;
let renderingRef = null;
let queuePending = false;
const createTime = (fnName, tagName = '') => {
    {
        return () => {
            return;
        };
    }
};
const uniqueTime = (key, measureText) => {
    {
        return () => {
            return;
        };
    }
};
const HYDRATED_CSS = '{visibility:hidden}.hydrated{visibility:inherit}';
const XLINK_NS = 'http://www.w3.org/1999/xlink';
/**
 * Default style mode id
 */
/**
 * Reusable empty obj/array
 * Don't add values to these!!
 */
const EMPTY_OBJ = {};
const isDef = (v) => v != null;
const isComplexType = (o) => {
    // https://jsperf.com/typeof-fn-object/5
    o = typeof o;
    return o === 'object' || o === 'function';
};
/**
 * Production h() function based on Preact by
 * Jason Miller (@developit)
 * Licensed under the MIT License
 * https://github.com/developit/preact/blob/master/LICENSE
 *
 * Modified for Stencil's compiler and vdom
 */
// const stack: any[] = [];
// export function h(nodeName: string | d.FunctionalComponent, vnodeData: d.PropsType, child?: d.ChildType): d.VNode;
// export function h(nodeName: string | d.FunctionalComponent, vnodeData: d.PropsType, ...children: d.ChildType[]): d.VNode;
const h = (nodeName, vnodeData, ...children) => {
    let child = null;
    let key = null;
    let slotName = null;
    let simple = false;
    let lastSimple = false;
    const vNodeChildren = [];
    const walk = (c) => {
        for (let i = 0; i < c.length; i++) {
            child = c[i];
            if (Array.isArray(child)) {
                walk(child);
            }
            else if (child != null && typeof child !== 'boolean') {
                if ((simple = typeof nodeName !== 'function' && !isComplexType(child))) {
                    child = String(child);
                }
                if (simple && lastSimple) {
                    // If the previous child was simple (string), we merge both
                    vNodeChildren[vNodeChildren.length - 1].$text$ += child;
                }
                else {
                    // Append a new vNode, if it's text, we create a text vNode
                    vNodeChildren.push(simple ? newVNode(null, child) : child);
                }
                lastSimple = simple;
            }
        }
    };
    walk(children);
    if (vnodeData) {
        // normalize class / classname attributes
        if (vnodeData.key) {
            key = vnodeData.key;
        }
        if (vnodeData.name) {
            slotName = vnodeData.name;
        }
        {
            const classData = vnodeData.className || vnodeData.class;
            if (classData) {
                vnodeData.class =
                    typeof classData !== 'object'
                        ? classData
                        : Object.keys(classData)
                            .filter((k) => classData[k])
                            .join(' ');
            }
        }
    }
    if (typeof nodeName === 'function') {
        // nodeName is a functional component
        return nodeName(vnodeData === null ? {} : vnodeData, vNodeChildren, vdomFnUtils);
    }
    const vnode = newVNode(nodeName, null);
    vnode.$attrs$ = vnodeData;
    if (vNodeChildren.length > 0) {
        vnode.$children$ = vNodeChildren;
    }
    {
        vnode.$key$ = key;
    }
    {
        vnode.$name$ = slotName;
    }
    return vnode;
};
const newVNode = (tag, text) => {
    const vnode = {
        $flags$: 0,
        $tag$: tag,
        $text$: text,
        $elm$: null,
        $children$: null,
    };
    {
        vnode.$attrs$ = null;
    }
    {
        vnode.$key$ = null;
    }
    {
        vnode.$name$ = null;
    }
    return vnode;
};
const Host = {};
const isHost = (node) => node && node.$tag$ === Host;
const vdomFnUtils = {
    forEach: (children, cb) => children.map(convertToPublic).forEach(cb),
    map: (children, cb) => children.map(convertToPublic).map(cb).map(convertToPrivate),
};
const convertToPublic = (node) => ({
    vattrs: node.$attrs$,
    vchildren: node.$children$,
    vkey: node.$key$,
    vname: node.$name$,
    vtag: node.$tag$,
    vtext: node.$text$,
});
const convertToPrivate = (node) => {
    if (typeof node.vtag === 'function') {
        const vnodeData = Object.assign({}, node.vattrs);
        if (node.vkey) {
            vnodeData.key = node.vkey;
        }
        if (node.vname) {
            vnodeData.name = node.vname;
        }
        return h(node.vtag, vnodeData, ...(node.vchildren || []));
    }
    const vnode = newVNode(node.vtag, node.vtext);
    vnode.$attrs$ = node.vattrs;
    vnode.$children$ = node.vchildren;
    vnode.$key$ = node.vkey;
    vnode.$name$ = node.vname;
    return vnode;
};
/**
 * Parse a new property value for a given property type.
 *
 * While the prop value can reasonably be expected to be of `any` type as far as TypeScript's type checker is concerned,
 * it is not safe to assume that the string returned by evaluating `typeof propValue` matches:
 *   1. `any`, the type given to `propValue` in the function signature
 *   2. the type stored from `propType`.
 *
 * This function provides the capability to parse/coerce a property's value to potentially any other JavaScript type.
 *
 * Property values represented in TSX preserve their type information. In the example below, the number 0 is passed to
 * a component. This `propValue` will preserve its type information (`typeof propValue === 'number'`). Note that is
 * based on the type of the value being passed in, not the type declared of the class member decorated with `@Prop`.
 * ```tsx
 * <my-cmp prop-val={0}></my-cmp>
 * ```
 *
 * HTML prop values on the other hand, will always a string
 *
 * @param propValue the new value to coerce to some type
 * @param propType the type of the prop, expressed as a binary number
 * @returns the parsed/coerced value
 */
const parsePropertyValue = (propValue, propType) => {
    // ensure this value is of the correct prop type
    if (propValue != null && !isComplexType(propValue)) {
        if (propType & 4 /* MEMBER_FLAGS.Boolean */) {
            // per the HTML spec, any string value means it is a boolean true value
            // but we'll cheat here and say that the string "false" is the boolean false
            return propValue === 'false' ? false : propValue === '' || !!propValue;
        }
        if (propType & 2 /* MEMBER_FLAGS.Number */) {
            // force it to be a number
            return parseFloat(propValue);
        }
        if (propType & 1 /* MEMBER_FLAGS.String */) {
            // could have been passed as a number or boolean
            // but we still want it as a string
            return String(propValue);
        }
        // redundant return here for better minification
        return propValue;
    }
    // not sure exactly what type we want
    // so no need to change to a different type
    return propValue;
};
const getElement = (ref) => (getHostRef(ref).$hostElement$ );
const createEvent = (ref, name, flags) => {
    const elm = getElement(ref);
    return {
        emit: (detail) => {
            return emitEvent(elm, name, {
                bubbles: !!(flags & 4 /* EVENT_FLAGS.Bubbles */),
                composed: !!(flags & 2 /* EVENT_FLAGS.Composed */),
                cancelable: !!(flags & 1 /* EVENT_FLAGS.Cancellable */),
                detail,
            });
        },
    };
};
/**
 * Helper function to create & dispatch a custom Event on a provided target
 * @param elm the target of the Event
 * @param name the name to give the custom Event
 * @param opts options for configuring a custom Event
 * @returns the custom Event
 */
const emitEvent = (elm, name, opts) => {
    const ev = plt.ce(name, opts);
    elm.dispatchEvent(ev);
    return ev;
};
const rootAppliedStyles = /*@__PURE__*/ new WeakMap();
const registerStyle = (scopeId, cssText, allowCS) => {
    let style = styles.get(scopeId);
    if (supportsConstructableStylesheets && allowCS) {
        style = (style || new CSSStyleSheet());
        if (typeof style === 'string') {
            style = cssText;
        }
        else {
            style.replaceSync(cssText);
        }
    }
    else {
        style = cssText;
    }
    styles.set(scopeId, style);
};
const addStyle = (styleContainerNode, cmpMeta, mode, hostElm) => {
    let scopeId = getScopeId(cmpMeta);
    const style = styles.get(scopeId);
    // if an element is NOT connected then getRootNode() will return the wrong root node
    // so the fallback is to always use the document for the root node in those cases
    styleContainerNode = styleContainerNode.nodeType === 11 /* NODE_TYPE.DocumentFragment */ ? styleContainerNode : doc;
    if (style) {
        if (typeof style === 'string') {
            styleContainerNode = styleContainerNode.head || styleContainerNode;
            let appliedStyles = rootAppliedStyles.get(styleContainerNode);
            let styleElm;
            if (!appliedStyles) {
                rootAppliedStyles.set(styleContainerNode, (appliedStyles = new Set()));
            }
            if (!appliedStyles.has(scopeId)) {
                {
                    {
                        styleElm = doc.createElement('style');
                        styleElm.innerHTML = style;
                    }
                    styleContainerNode.insertBefore(styleElm, styleContainerNode.querySelector('link'));
                }
                if (appliedStyles) {
                    appliedStyles.add(scopeId);
                }
            }
        }
        else if (!styleContainerNode.adoptedStyleSheets.includes(style)) {
            styleContainerNode.adoptedStyleSheets = [...styleContainerNode.adoptedStyleSheets, style];
        }
    }
    return scopeId;
};
const attachStyles = (hostRef) => {
    const cmpMeta = hostRef.$cmpMeta$;
    const elm = hostRef.$hostElement$;
    const flags = cmpMeta.$flags$;
    const endAttachStyles = createTime('attachStyles', cmpMeta.$tagName$);
    const scopeId = addStyle(elm.shadowRoot ? elm.shadowRoot : elm.getRootNode(), cmpMeta);
    if (flags & 10 /* CMP_FLAGS.needsScopedEncapsulation */) {
        // only required when we're NOT using native shadow dom (slot)
        // or this browser doesn't support native shadow dom
        // and this host element was NOT created with SSR
        // let's pick out the inner content for slot projection
        // create a node to represent where the original
        // content was first placed, which is useful later on
        // DOM WRITE!!
        elm['s-sc'] = scopeId;
        elm.classList.add(scopeId + '-h');
    }
    endAttachStyles();
};
const getScopeId = (cmp, mode) => 'sc-' + (cmp.$tagName$);
/**
 * Production setAccessor() function based on Preact by
 * Jason Miller (@developit)
 * Licensed under the MIT License
 * https://github.com/developit/preact/blob/master/LICENSE
 *
 * Modified for Stencil's compiler and vdom
 */
const setAccessor = (elm, memberName, oldValue, newValue, isSvg, flags) => {
    if (oldValue !== newValue) {
        let isProp = isMemberInElement(elm, memberName);
        let ln = memberName.toLowerCase();
        if (memberName === 'class') {
            const classList = elm.classList;
            const oldClasses = parseClassList(oldValue);
            const newClasses = parseClassList(newValue);
            classList.remove(...oldClasses.filter((c) => c && !newClasses.includes(c)));
            classList.add(...newClasses.filter((c) => c && !oldClasses.includes(c)));
        }
        else if (memberName === 'style') {
            // update style attribute, css properties and values
            {
                for (const prop in oldValue) {
                    if (!newValue || newValue[prop] == null) {
                        if (prop.includes('-')) {
                            elm.style.removeProperty(prop);
                        }
                        else {
                            elm.style[prop] = '';
                        }
                    }
                }
            }
            for (const prop in newValue) {
                if (!oldValue || newValue[prop] !== oldValue[prop]) {
                    if (prop.includes('-')) {
                        elm.style.setProperty(prop, newValue[prop]);
                    }
                    else {
                        elm.style[prop] = newValue[prop];
                    }
                }
            }
        }
        else if (memberName === 'key')
            ;
        else if (memberName === 'ref') {
            // minifier will clean this up
            if (newValue) {
                newValue(elm);
            }
        }
        else if ((!isProp ) &&
            memberName[0] === 'o' &&
            memberName[1] === 'n') {
            // Event Handlers
            // so if the member name starts with "on" and the 3rd characters is
            // a capital letter, and it's not already a member on the element,
            // then we're assuming it's an event listener
            if (memberName[2] === '-') {
                // on- prefixed events
                // allows to be explicit about the dom event to listen without any magic
                // under the hood:
                // <my-cmp on-click> // listens for "click"
                // <my-cmp on-Click> // listens for "Click"
                // <my-cmp on-ionChange> // listens for "ionChange"
                // <my-cmp on-EVENTS> // listens for "EVENTS"
                memberName = memberName.slice(3);
            }
            else if (isMemberInElement(win, ln)) {
                // standard event
                // the JSX attribute could have been "onMouseOver" and the
                // member name "onmouseover" is on the window's prototype
                // so let's add the listener "mouseover", which is all lowercased
                memberName = ln.slice(2);
            }
            else {
                // custom event
                // the JSX attribute could have been "onMyCustomEvent"
                // so let's trim off the "on" prefix and lowercase the first character
                // and add the listener "myCustomEvent"
                // except for the first character, we keep the event name case
                memberName = ln[2] + memberName.slice(3);
            }
            if (oldValue) {
                plt.rel(elm, memberName, oldValue, false);
            }
            if (newValue) {
                plt.ael(elm, memberName, newValue, false);
            }
        }
        else {
            // Set property if it exists and it's not a SVG
            const isComplex = isComplexType(newValue);
            if ((isProp || (isComplex && newValue !== null)) && !isSvg) {
                try {
                    if (!elm.tagName.includes('-')) {
                        const n = newValue == null ? '' : newValue;
                        // Workaround for Safari, moving the <input> caret when re-assigning the same valued
                        if (memberName === 'list') {
                            isProp = false;
                        }
                        else if (oldValue == null || elm[memberName] != n) {
                            elm[memberName] = n;
                        }
                    }
                    else {
                        elm[memberName] = newValue;
                    }
                }
                catch (e) { }
            }
            /**
             * Need to manually update attribute if:
             * - memberName is not an attribute
             * - if we are rendering the host element in order to reflect attribute
             * - if it's a SVG, since properties might not work in <svg>
             * - if the newValue is null/undefined or 'false'.
             */
            let xlink = false;
            {
                if (ln !== (ln = ln.replace(/^xlink\:?/, ''))) {
                    memberName = ln;
                    xlink = true;
                }
            }
            if (newValue == null || newValue === false) {
                if (newValue !== false || elm.getAttribute(memberName) === '') {
                    if (xlink) {
                        elm.removeAttributeNS(XLINK_NS, memberName);
                    }
                    else {
                        elm.removeAttribute(memberName);
                    }
                }
            }
            else if ((!isProp || flags & 4 /* VNODE_FLAGS.isHost */ || isSvg) && !isComplex) {
                newValue = newValue === true ? '' : newValue;
                if (xlink) {
                    elm.setAttributeNS(XLINK_NS, memberName, newValue);
                }
                else {
                    elm.setAttribute(memberName, newValue);
                }
            }
        }
    }
};
const parseClassListRegex = /\s/;
const parseClassList = (value) => (!value ? [] : value.split(parseClassListRegex));
const updateElement = (oldVnode, newVnode, isSvgMode, memberName) => {
    // if the element passed in is a shadow root, which is a document fragment
    // then we want to be adding attrs/props to the shadow root's "host" element
    // if it's not a shadow root, then we add attrs/props to the same element
    const elm = newVnode.$elm$.nodeType === 11 /* NODE_TYPE.DocumentFragment */ && newVnode.$elm$.host
        ? newVnode.$elm$.host
        : newVnode.$elm$;
    const oldVnodeAttrs = (oldVnode && oldVnode.$attrs$) || EMPTY_OBJ;
    const newVnodeAttrs = newVnode.$attrs$ || EMPTY_OBJ;
    {
        // remove attributes no longer present on the vnode by setting them to undefined
        for (memberName in oldVnodeAttrs) {
            if (!(memberName in newVnodeAttrs)) {
                setAccessor(elm, memberName, oldVnodeAttrs[memberName], undefined, isSvgMode, newVnode.$flags$);
            }
        }
    }
    // add new & update changed attributes
    for (memberName in newVnodeAttrs) {
        setAccessor(elm, memberName, oldVnodeAttrs[memberName], newVnodeAttrs[memberName], isSvgMode, newVnode.$flags$);
    }
};
/**
 * Create a DOM Node corresponding to one of the children of a given VNode.
 *
 * @param oldParentVNode the parent VNode from the previous render
 * @param newParentVNode the parent VNode from the current render
 * @param childIndex the index of the VNode, in the _new_ parent node's
 * children, for which we will create a new DOM node
 * @param parentElm the parent DOM node which our new node will be a child of
 * @returns the newly created node
 */
const createElm = (oldParentVNode, newParentVNode, childIndex, parentElm) => {
    // tslint:disable-next-line: prefer-const
    const newVNode = newParentVNode.$children$[childIndex];
    let i = 0;
    let elm;
    let childNode;
    let oldVNode;
    if (!useNativeShadowDom) {
        // remember for later we need to check to relocate nodes
        checkSlotRelocate = true;
        if (newVNode.$tag$ === 'slot') {
            if (scopeId) {
                // scoped css needs to add its scoped id to the parent element
                parentElm.classList.add(scopeId + '-s');
            }
            newVNode.$flags$ |= newVNode.$children$
                ? // slot element has fallback content
                    2 /* VNODE_FLAGS.isSlotFallback */
                : // slot element does not have fallback content
                    1 /* VNODE_FLAGS.isSlotReference */;
        }
    }
    if (newVNode.$text$ !== null) {
        // create text node
        elm = newVNode.$elm$ = doc.createTextNode(newVNode.$text$);
    }
    else if (newVNode.$flags$ & 1 /* VNODE_FLAGS.isSlotReference */) {
        // create a slot reference node
        elm = newVNode.$elm$ =
            doc.createTextNode('');
    }
    else {
        // create element
        elm = newVNode.$elm$ = (doc.createElement(newVNode.$flags$ & 2 /* VNODE_FLAGS.isSlotFallback */
                ? 'slot-fb'
                : newVNode.$tag$));
        // add css classes, attrs, props, listeners, etc.
        {
            updateElement(null, newVNode, isSvgMode);
        }
        if (isDef(scopeId) && elm['s-si'] !== scopeId) {
            // if there is a scopeId and this is the initial render
            // then let's add the scopeId as a css class
            elm.classList.add((elm['s-si'] = scopeId));
        }
        if (newVNode.$children$) {
            for (i = 0; i < newVNode.$children$.length; ++i) {
                // create the node
                childNode = createElm(oldParentVNode, newVNode, i, elm);
                // return node could have been null
                if (childNode) {
                    // append our new node
                    elm.appendChild(childNode);
                }
            }
        }
    }
    {
        elm['s-hn'] = hostTagName;
        if (newVNode.$flags$ & (2 /* VNODE_FLAGS.isSlotFallback */ | 1 /* VNODE_FLAGS.isSlotReference */)) {
            // remember the content reference comment
            elm['s-sr'] = true;
            // remember the content reference comment
            elm['s-cr'] = contentRef;
            // remember the slot name, or empty string for default slot
            elm['s-sn'] = newVNode.$name$ || '';
            // check if we've got an old vnode for this slot
            oldVNode = oldParentVNode && oldParentVNode.$children$ && oldParentVNode.$children$[childIndex];
            if (oldVNode && oldVNode.$tag$ === newVNode.$tag$ && oldParentVNode.$elm$) {
                // we've got an old slot vnode and the wrapper is being replaced
                // so let's move the old slot content back to it's original location
                putBackInOriginalLocation(oldParentVNode.$elm$, false);
            }
        }
    }
    return elm;
};
const putBackInOriginalLocation = (parentElm, recursive) => {
    plt.$flags$ |= 1 /* PLATFORM_FLAGS.isTmpDisconnected */;
    const oldSlotChildNodes = parentElm.childNodes;
    for (let i = oldSlotChildNodes.length - 1; i >= 0; i--) {
        const childNode = oldSlotChildNodes[i];
        if (childNode['s-hn'] !== hostTagName && childNode['s-ol']) {
            // // this child node in the old element is from another component
            // // remove this node from the old slot's parent
            // childNode.remove();
            // and relocate it back to it's original location
            parentReferenceNode(childNode).insertBefore(childNode, referenceNode(childNode));
            // remove the old original location comment entirely
            // later on the patch function will know what to do
            // and move this to the correct spot in need be
            childNode['s-ol'].remove();
            childNode['s-ol'] = undefined;
            checkSlotRelocate = true;
        }
        if (recursive) {
            putBackInOriginalLocation(childNode, recursive);
        }
    }
    plt.$flags$ &= ~1 /* PLATFORM_FLAGS.isTmpDisconnected */;
};
const addVnodes = (parentElm, before, parentVNode, vnodes, startIdx, endIdx) => {
    let containerElm = ((parentElm['s-cr'] && parentElm['s-cr'].parentNode) || parentElm);
    let childNode;
    if (containerElm.shadowRoot && containerElm.tagName === hostTagName) {
        containerElm = containerElm.shadowRoot;
    }
    for (; startIdx <= endIdx; ++startIdx) {
        if (vnodes[startIdx]) {
            childNode = createElm(null, parentVNode, startIdx, parentElm);
            if (childNode) {
                vnodes[startIdx].$elm$ = childNode;
                containerElm.insertBefore(childNode, referenceNode(before) );
            }
        }
    }
};
const removeVnodes = (vnodes, startIdx, endIdx, vnode, elm) => {
    for (; startIdx <= endIdx; ++startIdx) {
        if ((vnode = vnodes[startIdx])) {
            elm = vnode.$elm$;
            callNodeRefs(vnode);
            {
                // we're removing this element
                // so it's possible we need to show slot fallback content now
                checkSlotFallbackVisibility = true;
                if (elm['s-ol']) {
                    // remove the original location comment
                    elm['s-ol'].remove();
                }
                else {
                    // it's possible that child nodes of the node
                    // that's being removed are slot nodes
                    putBackInOriginalLocation(elm, true);
                }
            }
            // remove the vnode's element from the dom
            elm.remove();
        }
    }
};
/**
 * Reconcile the children of a new VNode with the children of an old VNode by
 * traversing the two collections of children, identifying nodes that are
 * conserved or changed, calling out to `patch` to make any necessary
 * updates to the DOM, and rearranging DOM nodes as needed.
 *
 * The algorithm for reconciling children works by analyzing two 'windows' onto
 * the two arrays of children (`oldCh` and `newCh`). We keep track of the
 * 'windows' by storing start and end indices and references to the
 * corresponding array entries. Initially the two 'windows' are basically equal
 * to the entire array, but we progressively narrow the windows until there are
 * no children left to update by doing the following:
 *
 * 1. Skip any `null` entries at the beginning or end of the two arrays, so
 *    that if we have an initial array like the following we'll end up dealing
 *    only with a window bounded by the highlighted elements:
 *
 *    [null, null, VNode1 , ... , VNode2, null, null]
 *                 ^^^^^^         ^^^^^^
 *
 * 2. Check to see if the elements at the head and tail positions are equal
 *    across the windows. This will basically detect elements which haven't
 *    been added, removed, or changed position, i.e. if you had the following
 *    VNode elements (represented as HTML):
 *
 *    oldVNode: `<div><p><span>HEY</span></p></div>`
 *    newVNode: `<div><p><span>THERE</span></p></div>`
 *
 *    Then when comparing the children of the `<div>` tag we check the equality
 *    of the VNodes corresponding to the `<p>` tags and, since they are the
 *    same tag in the same position, we'd be able to avoid completely
 *    re-rendering the subtree under them with a new DOM element and would just
 *    call out to `patch` to handle reconciling their children and so on.
 *
 * 3. Check, for both windows, to see if the element at the beginning of the
 *    window corresponds to the element at the end of the other window. This is
 *    a heuristic which will let us identify _some_ situations in which
 *    elements have changed position, for instance it _should_ detect that the
 *    children nodes themselves have not changed but merely moved in the
 *    following example:
 *
 *    oldVNode: `<div><element-one /><element-two /></div>`
 *    newVNode: `<div><element-two /><element-one /></div>`
 *
 *    If we find cases like this then we also need to move the concrete DOM
 *    elements corresponding to the moved children to write the re-order to the
 *    DOM.
 *
 * 4. Finally, if VNodes have the `key` attribute set on them we check for any
 *    nodes in the old children which have the same key as the first element in
 *    our window on the new children. If we find such a node we handle calling
 *    out to `patch`, moving relevant DOM nodes, and so on, in accordance with
 *    what we find.
 *
 * Finally, once we've narrowed our 'windows' to the point that either of them
 * collapse (i.e. they have length 0) we then handle any remaining VNode
 * insertion or deletion that needs to happen to get a DOM state that correctly
 * reflects the new child VNodes. If, for instance, after our window on the old
 * children has collapsed we still have more nodes on the new children that
 * we haven't dealt with yet then we need to add them, or if the new children
 * collapse but we still have unhandled _old_ children then we need to make
 * sure the corresponding DOM nodes are removed.
 *
 * @param parentElm the node into which the parent VNode is rendered
 * @param oldCh the old children of the parent node
 * @param newVNode the new VNode which will replace the parent
 * @param newCh the new children of the parent node
 */
const updateChildren = (parentElm, oldCh, newVNode, newCh) => {
    let oldStartIdx = 0;
    let newStartIdx = 0;
    let idxInOld = 0;
    let i = 0;
    let oldEndIdx = oldCh.length - 1;
    let oldStartVnode = oldCh[0];
    let oldEndVnode = oldCh[oldEndIdx];
    let newEndIdx = newCh.length - 1;
    let newStartVnode = newCh[0];
    let newEndVnode = newCh[newEndIdx];
    let node;
    let elmToMove;
    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
        if (oldStartVnode == null) {
            // VNode might have been moved left
            oldStartVnode = oldCh[++oldStartIdx];
        }
        else if (oldEndVnode == null) {
            oldEndVnode = oldCh[--oldEndIdx];
        }
        else if (newStartVnode == null) {
            newStartVnode = newCh[++newStartIdx];
        }
        else if (newEndVnode == null) {
            newEndVnode = newCh[--newEndIdx];
        }
        else if (isSameVnode(oldStartVnode, newStartVnode)) {
            // if the start nodes are the same then we should patch the new VNode
            // onto the old one, and increment our `newStartIdx` and `oldStartIdx`
            // indices to reflect that. We don't need to move any DOM Nodes around
            // since things are matched up in order.
            patch(oldStartVnode, newStartVnode);
            oldStartVnode = oldCh[++oldStartIdx];
            newStartVnode = newCh[++newStartIdx];
        }
        else if (isSameVnode(oldEndVnode, newEndVnode)) {
            // likewise, if the end nodes are the same we patch new onto old and
            // decrement our end indices, and also likewise in this case we don't
            // need to move any DOM Nodes.
            patch(oldEndVnode, newEndVnode);
            oldEndVnode = oldCh[--oldEndIdx];
            newEndVnode = newCh[--newEndIdx];
        }
        else if (isSameVnode(oldStartVnode, newEndVnode)) {
            // case: "Vnode moved right"
            //
            // We've found that the last node in our window on the new children is
            // the same VNode as the _first_ node in our window on the old children
            // we're dealing with now. Visually, this is the layout of these two
            // nodes:
            //
            // newCh: [..., newStartVnode , ... , newEndVnode , ...]
            //                                    ^^^^^^^^^^^
            // oldCh: [..., oldStartVnode , ... , oldEndVnode , ...]
            //              ^^^^^^^^^^^^^
            //
            // In this situation we need to patch `newEndVnode` onto `oldStartVnode`
            // and move the DOM element for `oldStartVnode`.
            if ((oldStartVnode.$tag$ === 'slot' || newEndVnode.$tag$ === 'slot')) {
                putBackInOriginalLocation(oldStartVnode.$elm$.parentNode, false);
            }
            patch(oldStartVnode, newEndVnode);
            // We need to move the element for `oldStartVnode` into a position which
            // will be appropriate for `newEndVnode`. For this we can use
            // `.insertBefore` and `oldEndVnode.$elm$.nextSibling`. If there is a
            // sibling for `oldEndVnode.$elm$` then we want to move the DOM node for
            // `oldStartVnode` between `oldEndVnode` and it's sibling, like so:
            //
            // <old-start-node />
            // <some-intervening-node />
            // <old-end-node />
            // <!-- ->              <-- `oldStartVnode.$elm$` should be inserted here
            // <next-sibling />
            //
            // If instead `oldEndVnode.$elm$` has no sibling then we just want to put
            // the node for `oldStartVnode` at the end of the children of
            // `parentElm`. Luckily, `Node.nextSibling` will return `null` if there
            // aren't any siblings, and passing `null` to `Node.insertBefore` will
            // append it to the children of the parent element.
            parentElm.insertBefore(oldStartVnode.$elm$, oldEndVnode.$elm$.nextSibling);
            oldStartVnode = oldCh[++oldStartIdx];
            newEndVnode = newCh[--newEndIdx];
        }
        else if (isSameVnode(oldEndVnode, newStartVnode)) {
            // case: "Vnode moved left"
            //
            // We've found that the first node in our window on the new children is
            // the same VNode as the _last_ node in our window on the old children.
            // Visually, this is the layout of these two nodes:
            //
            // newCh: [..., newStartVnode , ... , newEndVnode , ...]
            //              ^^^^^^^^^^^^^
            // oldCh: [..., oldStartVnode , ... , oldEndVnode , ...]
            //                                    ^^^^^^^^^^^
            //
            // In this situation we need to patch `newStartVnode` onto `oldEndVnode`
            // (which will handle updating any changed attributes, reconciling their
            // children etc) but we also need to move the DOM node to which
            // `oldEndVnode` corresponds.
            if ((oldStartVnode.$tag$ === 'slot' || newEndVnode.$tag$ === 'slot')) {
                putBackInOriginalLocation(oldEndVnode.$elm$.parentNode, false);
            }
            patch(oldEndVnode, newStartVnode);
            // We've already checked above if `oldStartVnode` and `newStartVnode` are
            // the same node, so since we're here we know that they are not. Thus we
            // can move the element for `oldEndVnode` _before_ the element for
            // `oldStartVnode`, leaving `oldStartVnode` to be reconciled in the
            // future.
            parentElm.insertBefore(oldEndVnode.$elm$, oldStartVnode.$elm$);
            oldEndVnode = oldCh[--oldEndIdx];
            newStartVnode = newCh[++newStartIdx];
        }
        else {
            // Here we do some checks to match up old and new nodes based on the
            // `$key$` attribute, which is set by putting a `key="my-key"` attribute
            // in the JSX for a DOM element in the implementation of a Stencil
            // component.
            //
            // First we check to see if there are any nodes in the array of old
            // children which have the same key as the first node in the new
            // children.
            idxInOld = -1;
            {
                for (i = oldStartIdx; i <= oldEndIdx; ++i) {
                    if (oldCh[i] && oldCh[i].$key$ !== null && oldCh[i].$key$ === newStartVnode.$key$) {
                        idxInOld = i;
                        break;
                    }
                }
            }
            if (idxInOld >= 0) {
                // We found a node in the old children which matches up with the first
                // node in the new children! So let's deal with that
                elmToMove = oldCh[idxInOld];
                if (elmToMove.$tag$ !== newStartVnode.$tag$) {
                    // the tag doesn't match so we'll need a new DOM element
                    node = createElm(oldCh && oldCh[newStartIdx], newVNode, idxInOld, parentElm);
                }
                else {
                    patch(elmToMove, newStartVnode);
                    // invalidate the matching old node so that we won't try to update it
                    // again later on
                    oldCh[idxInOld] = undefined;
                    node = elmToMove.$elm$;
                }
                newStartVnode = newCh[++newStartIdx];
            }
            else {
                // We either didn't find an element in the old children that matches
                // the key of the first new child OR the build is not using `key`
                // attributes at all. In either case we need to create a new element
                // for the new node.
                node = createElm(oldCh && oldCh[newStartIdx], newVNode, newStartIdx, parentElm);
                newStartVnode = newCh[++newStartIdx];
            }
            if (node) {
                // if we created a new node then handle inserting it to the DOM
                {
                    parentReferenceNode(oldStartVnode.$elm$).insertBefore(node, referenceNode(oldStartVnode.$elm$));
                }
            }
        }
    }
    if (oldStartIdx > oldEndIdx) {
        // we have some more new nodes to add which don't match up with old nodes
        addVnodes(parentElm, newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].$elm$, newVNode, newCh, newStartIdx, newEndIdx);
    }
    else if (newStartIdx > newEndIdx) {
        // there are nodes in the `oldCh` array which no longer correspond to nodes
        // in the new array, so lets remove them (which entails cleaning up the
        // relevant DOM nodes)
        removeVnodes(oldCh, oldStartIdx, oldEndIdx);
    }
};
/**
 * Compare two VNodes to determine if they are the same
 *
 * **NB**: This function is an equality _heuristic_ based on the available
 * information set on the two VNodes and can be misleading under certain
 * circumstances. In particular, if the two nodes do not have `key` attrs
 * (available under `$key$` on VNodes) then the function falls back on merely
 * checking that they have the same tag.
 *
 * So, in other words, if `key` attrs are not set on VNodes which may be
 * changing order within a `children` array or something along those lines then
 * we could obtain a false positive and then have to do needless re-rendering.
 *
 * @param leftVNode the first VNode to check
 * @param rightVNode the second VNode to check
 * @returns whether they're equal or not
 */
const isSameVnode = (leftVNode, rightVNode) => {
    // compare if two vnode to see if they're "technically" the same
    // need to have the same element tag, and same key to be the same
    if (leftVNode.$tag$ === rightVNode.$tag$) {
        if (leftVNode.$tag$ === 'slot') {
            return leftVNode.$name$ === rightVNode.$name$;
        }
        // this will be set if components in the build have `key` attrs set on them
        {
            return leftVNode.$key$ === rightVNode.$key$;
        }
    }
    return false;
};
const referenceNode = (node) => {
    // this node was relocated to a new location in the dom
    // because of some other component's slot
    // but we still have an html comment in place of where
    // it's original location was according to it's original vdom
    return (node && node['s-ol']) || node;
};
const parentReferenceNode = (node) => (node['s-ol'] ? node['s-ol'] : node).parentNode;
/**
 * Handle reconciling an outdated VNode with a new one which corresponds to
 * it. This function handles flushing updates to the DOM and reconciling the
 * children of the two nodes (if any).
 *
 * @param oldVNode an old VNode whose DOM element and children we want to update
 * @param newVNode a new VNode representing an updated version of the old one
 */
const patch = (oldVNode, newVNode) => {
    const elm = (newVNode.$elm$ = oldVNode.$elm$);
    const oldChildren = oldVNode.$children$;
    const newChildren = newVNode.$children$;
    const tag = newVNode.$tag$;
    const text = newVNode.$text$;
    let defaultHolder;
    if (text === null) {
        {
            if (tag === 'slot')
                ;
            else {
                // either this is the first render of an element OR it's an update
                // AND we already know it's possible it could have changed
                // this updates the element's css classes, attrs, props, listeners, etc.
                updateElement(oldVNode, newVNode, isSvgMode);
            }
        }
        if (oldChildren !== null && newChildren !== null) {
            // looks like there's child vnodes for both the old and new vnodes
            // so we need to call `updateChildren` to reconcile them
            updateChildren(elm, oldChildren, newVNode, newChildren);
        }
        else if (newChildren !== null) {
            // no old child vnodes, but there are new child vnodes to add
            if (oldVNode.$text$ !== null) {
                // the old vnode was text, so be sure to clear it out
                elm.textContent = '';
            }
            // add the new vnode children
            addVnodes(elm, null, newVNode, newChildren, 0, newChildren.length - 1);
        }
        else if (oldChildren !== null) {
            // no new child vnodes, but there are old child vnodes to remove
            removeVnodes(oldChildren, 0, oldChildren.length - 1);
        }
    }
    else if ((defaultHolder = elm['s-cr'])) {
        // this element has slotted content
        defaultHolder.parentNode.textContent = text;
    }
    else if (oldVNode.$text$ !== text) {
        // update the text content for the text only vnode
        // and also only if the text is different than before
        elm.data = text;
    }
};
const updateFallbackSlotVisibility = (elm) => {
    // tslint:disable-next-line: prefer-const
    const childNodes = elm.childNodes;
    let childNode;
    let i;
    let ilen;
    let j;
    let slotNameAttr;
    let nodeType;
    for (i = 0, ilen = childNodes.length; i < ilen; i++) {
        childNode = childNodes[i];
        if (childNode.nodeType === 1 /* NODE_TYPE.ElementNode */) {
            if (childNode['s-sr']) {
                // this is a slot fallback node
                // get the slot name for this slot reference node
                slotNameAttr = childNode['s-sn'];
                // by default always show a fallback slot node
                // then hide it if there are other slots in the light dom
                childNode.hidden = false;
                for (j = 0; j < ilen; j++) {
                    nodeType = childNodes[j].nodeType;
                    if (childNodes[j]['s-hn'] !== childNode['s-hn'] || slotNameAttr !== '') {
                        // this sibling node is from a different component OR is a named fallback slot node
                        if (nodeType === 1 /* NODE_TYPE.ElementNode */ && slotNameAttr === childNodes[j].getAttribute('slot')) {
                            childNode.hidden = true;
                            break;
                        }
                    }
                    else {
                        // this is a default fallback slot node
                        // any element or text node (with content)
                        // should hide the default fallback slot node
                        if (nodeType === 1 /* NODE_TYPE.ElementNode */ ||
                            (nodeType === 3 /* NODE_TYPE.TextNode */ && childNodes[j].textContent.trim() !== '')) {
                            childNode.hidden = true;
                            break;
                        }
                    }
                }
            }
            // keep drilling down
            updateFallbackSlotVisibility(childNode);
        }
    }
};
const relocateNodes = [];
const relocateSlotContent = (elm) => {
    // tslint:disable-next-line: prefer-const
    let childNode;
    let node;
    let hostContentNodes;
    let slotNameAttr;
    let relocateNodeData;
    let j;
    let i = 0;
    const childNodes = elm.childNodes;
    const ilen = childNodes.length;
    for (; i < ilen; i++) {
        childNode = childNodes[i];
        if (childNode['s-sr'] && (node = childNode['s-cr']) && node.parentNode) {
            // first got the content reference comment node
            // then we got it's parent, which is where all the host content is in now
            hostContentNodes = node.parentNode.childNodes;
            slotNameAttr = childNode['s-sn'];
            for (j = hostContentNodes.length - 1; j >= 0; j--) {
                node = hostContentNodes[j];
                if (!node['s-cn'] && !node['s-nr'] && node['s-hn'] !== childNode['s-hn']) {
                    // let's do some relocating to its new home
                    // but never relocate a content reference node
                    // that is suppose to always represent the original content location
                    if (isNodeLocatedInSlot(node, slotNameAttr)) {
                        // it's possible we've already decided to relocate this node
                        relocateNodeData = relocateNodes.find((r) => r.$nodeToRelocate$ === node);
                        // made some changes to slots
                        // let's make sure we also double check
                        // fallbacks are correctly hidden or shown
                        checkSlotFallbackVisibility = true;
                        node['s-sn'] = node['s-sn'] || slotNameAttr;
                        if (relocateNodeData) {
                            // previously we never found a slot home for this node
                            // but turns out we did, so let's remember it now
                            relocateNodeData.$slotRefNode$ = childNode;
                        }
                        else {
                            // add to our list of nodes to relocate
                            relocateNodes.push({
                                $slotRefNode$: childNode,
                                $nodeToRelocate$: node,
                            });
                        }
                        if (node['s-sr']) {
                            relocateNodes.map((relocateNode) => {
                                if (isNodeLocatedInSlot(relocateNode.$nodeToRelocate$, node['s-sn'])) {
                                    relocateNodeData = relocateNodes.find((r) => r.$nodeToRelocate$ === node);
                                    if (relocateNodeData && !relocateNode.$slotRefNode$) {
                                        relocateNode.$slotRefNode$ = relocateNodeData.$slotRefNode$;
                                    }
                                }
                            });
                        }
                    }
                    else if (!relocateNodes.some((r) => r.$nodeToRelocate$ === node)) {
                        // so far this element does not have a slot home, not setting slotRefNode on purpose
                        // if we never find a home for this element then we'll need to hide it
                        relocateNodes.push({
                            $nodeToRelocate$: node,
                        });
                    }
                }
            }
        }
        if (childNode.nodeType === 1 /* NODE_TYPE.ElementNode */) {
            relocateSlotContent(childNode);
        }
    }
};
const isNodeLocatedInSlot = (nodeToRelocate, slotNameAttr) => {
    if (nodeToRelocate.nodeType === 1 /* NODE_TYPE.ElementNode */) {
        if (nodeToRelocate.getAttribute('slot') === null && slotNameAttr === '') {
            return true;
        }
        if (nodeToRelocate.getAttribute('slot') === slotNameAttr) {
            return true;
        }
        return false;
    }
    if (nodeToRelocate['s-sn'] === slotNameAttr) {
        return true;
    }
    return slotNameAttr === '';
};
const callNodeRefs = (vNode) => {
    {
        vNode.$attrs$ && vNode.$attrs$.ref && vNode.$attrs$.ref(null);
        vNode.$children$ && vNode.$children$.map(callNodeRefs);
    }
};
const renderVdom = (hostRef, renderFnResults) => {
    const hostElm = hostRef.$hostElement$;
    const cmpMeta = hostRef.$cmpMeta$;
    const oldVNode = hostRef.$vnode$ || newVNode(null, null);
    const rootVnode = isHost(renderFnResults) ? renderFnResults : h(null, null, renderFnResults);
    hostTagName = hostElm.tagName;
    if (cmpMeta.$attrsToReflect$) {
        rootVnode.$attrs$ = rootVnode.$attrs$ || {};
        cmpMeta.$attrsToReflect$.map(([propName, attribute]) => (rootVnode.$attrs$[attribute] = hostElm[propName]));
    }
    rootVnode.$tag$ = null;
    rootVnode.$flags$ |= 4 /* VNODE_FLAGS.isHost */;
    hostRef.$vnode$ = rootVnode;
    rootVnode.$elm$ = oldVNode.$elm$ = (hostElm.shadowRoot || hostElm );
    {
        scopeId = hostElm['s-sc'];
    }
    {
        contentRef = hostElm['s-cr'];
        useNativeShadowDom = (cmpMeta.$flags$ & 1 /* CMP_FLAGS.shadowDomEncapsulation */) !== 0;
        // always reset
        checkSlotFallbackVisibility = false;
    }
    // synchronous patch
    patch(oldVNode, rootVnode);
    {
        // while we're moving nodes around existing nodes, temporarily disable
        // the disconnectCallback from working
        plt.$flags$ |= 1 /* PLATFORM_FLAGS.isTmpDisconnected */;
        if (checkSlotRelocate) {
            relocateSlotContent(rootVnode.$elm$);
            let relocateData;
            let nodeToRelocate;
            let orgLocationNode;
            let parentNodeRef;
            let insertBeforeNode;
            let refNode;
            let i = 0;
            for (; i < relocateNodes.length; i++) {
                relocateData = relocateNodes[i];
                nodeToRelocate = relocateData.$nodeToRelocate$;
                if (!nodeToRelocate['s-ol']) {
                    // add a reference node marking this node's original location
                    // keep a reference to this node for later lookups
                    orgLocationNode =
                        doc.createTextNode('');
                    orgLocationNode['s-nr'] = nodeToRelocate;
                    nodeToRelocate.parentNode.insertBefore((nodeToRelocate['s-ol'] = orgLocationNode), nodeToRelocate);
                }
            }
            for (i = 0; i < relocateNodes.length; i++) {
                relocateData = relocateNodes[i];
                nodeToRelocate = relocateData.$nodeToRelocate$;
                if (relocateData.$slotRefNode$) {
                    // by default we're just going to insert it directly
                    // after the slot reference node
                    parentNodeRef = relocateData.$slotRefNode$.parentNode;
                    insertBeforeNode = relocateData.$slotRefNode$.nextSibling;
                    orgLocationNode = nodeToRelocate['s-ol'];
                    while ((orgLocationNode = orgLocationNode.previousSibling)) {
                        refNode = orgLocationNode['s-nr'];
                        if (refNode && refNode['s-sn'] === nodeToRelocate['s-sn'] && parentNodeRef === refNode.parentNode) {
                            refNode = refNode.nextSibling;
                            if (!refNode || !refNode['s-nr']) {
                                insertBeforeNode = refNode;
                                break;
                            }
                        }
                    }
                    if ((!insertBeforeNode && parentNodeRef !== nodeToRelocate.parentNode) ||
                        nodeToRelocate.nextSibling !== insertBeforeNode) {
                        // we've checked that it's worth while to relocate
                        // since that the node to relocate
                        // has a different next sibling or parent relocated
                        if (nodeToRelocate !== insertBeforeNode) {
                            if (!nodeToRelocate['s-hn'] && nodeToRelocate['s-ol']) {
                                // probably a component in the index.html that doesn't have it's hostname set
                                nodeToRelocate['s-hn'] = nodeToRelocate['s-ol'].parentNode.nodeName;
                            }
                            // add it back to the dom but in its new home
                            parentNodeRef.insertBefore(nodeToRelocate, insertBeforeNode);
                        }
                    }
                }
                else {
                    // this node doesn't have a slot home to go to, so let's hide it
                    if (nodeToRelocate.nodeType === 1 /* NODE_TYPE.ElementNode */) {
                        nodeToRelocate.hidden = true;
                    }
                }
            }
        }
        if (checkSlotFallbackVisibility) {
            updateFallbackSlotVisibility(rootVnode.$elm$);
        }
        // done moving nodes around
        // allow the disconnect callback to work again
        plt.$flags$ &= ~1 /* PLATFORM_FLAGS.isTmpDisconnected */;
        // always reset
        relocateNodes.length = 0;
    }
};
const attachToAncestor = (hostRef, ancestorComponent) => {
    if (ancestorComponent && !hostRef.$onRenderResolve$ && ancestorComponent['s-p']) {
        ancestorComponent['s-p'].push(new Promise((r) => (hostRef.$onRenderResolve$ = r)));
    }
};
const scheduleUpdate = (hostRef, isInitialLoad) => {
    {
        hostRef.$flags$ |= 16 /* HOST_FLAGS.isQueuedForUpdate */;
    }
    if (hostRef.$flags$ & 4 /* HOST_FLAGS.isWaitingForChildren */) {
        hostRef.$flags$ |= 512 /* HOST_FLAGS.needsRerender */;
        return;
    }
    attachToAncestor(hostRef, hostRef.$ancestorComponent$);
    // there is no ancestor component or the ancestor component
    // has already fired off its lifecycle update then
    // fire off the initial update
    const dispatch = () => dispatchHooks(hostRef, isInitialLoad);
    return writeTask(dispatch) ;
};
const dispatchHooks = (hostRef, isInitialLoad) => {
    const endSchedule = createTime('scheduleUpdate', hostRef.$cmpMeta$.$tagName$);
    const instance = hostRef.$lazyInstance$ ;
    let promise;
    if (isInitialLoad) {
        {
            hostRef.$flags$ |= 256 /* HOST_FLAGS.isListenReady */;
            if (hostRef.$queuedListeners$) {
                hostRef.$queuedListeners$.map(([methodName, event]) => safeCall(instance, methodName, event));
                hostRef.$queuedListeners$ = null;
            }
        }
        {
            promise = safeCall(instance, 'componentWillLoad');
        }
    }
    endSchedule();
    return then(promise, () => updateComponent(hostRef, instance, isInitialLoad));
};
const updateComponent = async (hostRef, instance, isInitialLoad) => {
    // updateComponent
    const elm = hostRef.$hostElement$;
    const endUpdate = createTime('update', hostRef.$cmpMeta$.$tagName$);
    const rc = elm['s-rc'];
    if (isInitialLoad) {
        // DOM WRITE!
        attachStyles(hostRef);
    }
    const endRender = createTime('render', hostRef.$cmpMeta$.$tagName$);
    {
        callRender(hostRef, instance);
    }
    if (rc) {
        // ok, so turns out there are some child host elements
        // waiting on this parent element to load
        // let's fire off all update callbacks waiting
        rc.map((cb) => cb());
        elm['s-rc'] = undefined;
    }
    endRender();
    endUpdate();
    {
        const childrenPromises = elm['s-p'];
        const postUpdate = () => postUpdateComponent(hostRef);
        if (childrenPromises.length === 0) {
            postUpdate();
        }
        else {
            Promise.all(childrenPromises).then(postUpdate);
            hostRef.$flags$ |= 4 /* HOST_FLAGS.isWaitingForChildren */;
            childrenPromises.length = 0;
        }
    }
};
const callRender = (hostRef, instance, elm) => {
    try {
        renderingRef = instance;
        instance = instance.render() ;
        {
            hostRef.$flags$ &= ~16 /* HOST_FLAGS.isQueuedForUpdate */;
        }
        {
            hostRef.$flags$ |= 2 /* HOST_FLAGS.hasRendered */;
        }
        {
            {
                // looks like we've got child nodes to render into this host element
                // or we need to update the css class/attrs on the host element
                // DOM WRITE!
                {
                    renderVdom(hostRef, instance);
                }
            }
        }
    }
    catch (e) {
        consoleError(e, hostRef.$hostElement$);
    }
    renderingRef = null;
    return null;
};
const getRenderingRef = () => renderingRef;
const postUpdateComponent = (hostRef) => {
    const tagName = hostRef.$cmpMeta$.$tagName$;
    const elm = hostRef.$hostElement$;
    const endPostUpdate = createTime('postUpdate', tagName);
    const instance = hostRef.$lazyInstance$ ;
    const ancestorComponent = hostRef.$ancestorComponent$;
    {
        safeCall(instance, 'componentDidRender');
    }
    if (!(hostRef.$flags$ & 64 /* HOST_FLAGS.hasLoadedComponent */)) {
        hostRef.$flags$ |= 64 /* HOST_FLAGS.hasLoadedComponent */;
        {
            // DOM WRITE!
            addHydratedFlag(elm);
        }
        {
            safeCall(instance, 'componentDidLoad');
        }
        endPostUpdate();
        {
            hostRef.$onReadyResolve$(elm);
            if (!ancestorComponent) {
                appDidLoad();
            }
        }
    }
    else {
        endPostUpdate();
    }
    {
        hostRef.$onInstanceResolve$(elm);
    }
    // load events fire from bottom to top
    // the deepest elements load first then bubbles up
    {
        if (hostRef.$onRenderResolve$) {
            hostRef.$onRenderResolve$();
            hostRef.$onRenderResolve$ = undefined;
        }
        if (hostRef.$flags$ & 512 /* HOST_FLAGS.needsRerender */) {
            nextTick(() => scheduleUpdate(hostRef, false));
        }
        hostRef.$flags$ &= ~(4 /* HOST_FLAGS.isWaitingForChildren */ | 512 /* HOST_FLAGS.needsRerender */);
    }
    // ( •_•)
    // ( •_•)>⌐■-■
    // (⌐■_■)
};
const forceUpdate = (ref) => {
    {
        const hostRef = getHostRef(ref);
        const isConnected = hostRef.$hostElement$.isConnected;
        if (isConnected &&
            (hostRef.$flags$ & (2 /* HOST_FLAGS.hasRendered */ | 16 /* HOST_FLAGS.isQueuedForUpdate */)) === 2 /* HOST_FLAGS.hasRendered */) {
            scheduleUpdate(hostRef, false);
        }
        // Returns "true" when the forced update was successfully scheduled
        return isConnected;
    }
};
const appDidLoad = (who) => {
    // on appload
    // we have finish the first big initial render
    {
        addHydratedFlag(doc.documentElement);
    }
    nextTick(() => emitEvent(win, 'appload', { detail: { namespace: NAMESPACE } }));
};
const safeCall = (instance, method, arg) => {
    if (instance && instance[method]) {
        try {
            return instance[method](arg);
        }
        catch (e) {
            consoleError(e);
        }
    }
    return undefined;
};
const then = (promise, thenFn) => {
    return promise && promise.then ? promise.then(thenFn) : thenFn();
};
const addHydratedFlag = (elm) => elm.classList.add('hydrated')
    ;
const getValue = (ref, propName) => getHostRef(ref).$instanceValues$.get(propName);
const setValue = (ref, propName, newVal, cmpMeta) => {
    // check our new property value against our internal value
    const hostRef = getHostRef(ref);
    const elm = hostRef.$hostElement$ ;
    const oldVal = hostRef.$instanceValues$.get(propName);
    const flags = hostRef.$flags$;
    const instance = hostRef.$lazyInstance$ ;
    newVal = parsePropertyValue(newVal, cmpMeta.$members$[propName][0]);
    // explicitly check for NaN on both sides, as `NaN === NaN` is always false
    const areBothNaN = Number.isNaN(oldVal) && Number.isNaN(newVal);
    const didValueChange = newVal !== oldVal && !areBothNaN;
    if ((!(flags & 8 /* HOST_FLAGS.isConstructingInstance */) || oldVal === undefined) && didValueChange) {
        // gadzooks! the property's value has changed!!
        // set our new value!
        hostRef.$instanceValues$.set(propName, newVal);
        if (instance) {
            // get an array of method names of watch functions to call
            if (cmpMeta.$watchers$ && flags & 128 /* HOST_FLAGS.isWatchReady */) {
                const watchMethods = cmpMeta.$watchers$[propName];
                if (watchMethods) {
                    // this instance is watching for when this property changed
                    watchMethods.map((watchMethodName) => {
                        try {
                            // fire off each of the watch methods that are watching this property
                            instance[watchMethodName](newVal, oldVal, propName);
                        }
                        catch (e) {
                            consoleError(e, elm);
                        }
                    });
                }
            }
            if ((flags & (2 /* HOST_FLAGS.hasRendered */ | 16 /* HOST_FLAGS.isQueuedForUpdate */)) === 2 /* HOST_FLAGS.hasRendered */) {
                // looks like this value actually changed, so we've got work to do!
                // but only if we've already rendered, otherwise just chill out
                // queue that we need to do an update, but don't worry about queuing
                // up millions cuz this function ensures it only runs once
                scheduleUpdate(hostRef, false);
            }
        }
    }
};
/**
 * Attach a series of runtime constructs to a compiled Stencil component
 * constructor, including getters and setters for the `@Prop` and `@State`
 * decorators, callbacks for when attributes change, and so on.
 *
 * @param Cstr the constructor for a component that we need to process
 * @param cmpMeta metadata collected previously about the component
 * @param flags a number used to store a series of bit flags
 * @returns a reference to the same constructor passed in (but now mutated)
 */
const proxyComponent = (Cstr, cmpMeta, flags) => {
    if (cmpMeta.$members$) {
        if (Cstr.watchers) {
            cmpMeta.$watchers$ = Cstr.watchers;
        }
        // It's better to have a const than two Object.entries()
        const members = Object.entries(cmpMeta.$members$);
        const prototype = Cstr.prototype;
        members.map(([memberName, [memberFlags]]) => {
            if ((memberFlags & 31 /* MEMBER_FLAGS.Prop */ ||
                    ((flags & 2 /* PROXY_FLAGS.proxyState */) && memberFlags & 32 /* MEMBER_FLAGS.State */))) {
                // proxyComponent - prop
                Object.defineProperty(prototype, memberName, {
                    get() {
                        // proxyComponent, get value
                        return getValue(this, memberName);
                    },
                    set(newValue) {
                        // proxyComponent, set value
                        setValue(this, memberName, newValue, cmpMeta);
                    },
                    configurable: true,
                    enumerable: true,
                });
            }
            else if (flags & 1 /* PROXY_FLAGS.isElementConstructor */ &&
                memberFlags & 64 /* MEMBER_FLAGS.Method */) {
                // proxyComponent - method
                Object.defineProperty(prototype, memberName, {
                    value(...args) {
                        const ref = getHostRef(this);
                        return ref.$onInstancePromise$.then(() => ref.$lazyInstance$[memberName](...args));
                    },
                });
            }
        });
        if ((flags & 1 /* PROXY_FLAGS.isElementConstructor */)) {
            const attrNameToPropName = new Map();
            prototype.attributeChangedCallback = function (attrName, _oldValue, newValue) {
                plt.jmp(() => {
                    const propName = attrNameToPropName.get(attrName);
                    //  In a web component lifecycle the attributeChangedCallback runs prior to connectedCallback
                    //  in the case where an attribute was set inline.
                    //  ```html
                    //    <my-component some-attribute="some-value"></my-component>
                    //  ```
                    //
                    //  There is an edge case where a developer sets the attribute inline on a custom element and then
                    //  programmatically changes it before it has been upgraded as shown below:
                    //
                    //  ```html
                    //    <!-- this component has _not_ been upgraded yet -->
                    //    <my-component id="test" some-attribute="some-value"></my-component>
                    //    <script>
                    //      // grab non-upgraded component
                    //      el = document.querySelector("#test");
                    //      el.someAttribute = "another-value";
                    //      // upgrade component
                    //      customElements.define('my-component', MyComponent);
                    //    </script>
                    //  ```
                    //  In this case if we do not unshadow here and use the value of the shadowing property, attributeChangedCallback
                    //  will be called with `newValue = "some-value"` and will set the shadowed property (this.someAttribute = "another-value")
                    //  to the value that was set inline i.e. "some-value" from above example. When
                    //  the connectedCallback attempts to unshadow it will use "some-value" as the initial value rather than "another-value"
                    //
                    //  The case where the attribute was NOT set inline but was not set programmatically shall be handled/unshadowed
                    //  by connectedCallback as this attributeChangedCallback will not fire.
                    //
                    //  https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
                    //
                    //  TODO(STENCIL-16) we should think about whether or not we actually want to be reflecting the attributes to
                    //  properties here given that this goes against best practices outlined here
                    //  https://developers.google.com/web/fundamentals/web-components/best-practices#avoid-reentrancy
                    if (this.hasOwnProperty(propName)) {
                        newValue = this[propName];
                        delete this[propName];
                    }
                    else if (prototype.hasOwnProperty(propName) &&
                        typeof this[propName] === 'number' &&
                        this[propName] == newValue) {
                        // if the propName exists on the prototype of `Cstr`, this update may be a result of Stencil using native
                        // APIs to reflect props as attributes. Calls to `setAttribute(someElement, propName)` will result in
                        // `propName` to be converted to a `DOMString`, which may not be what we want for other primitive props.
                        return;
                    }
                    this[propName] = newValue === null && typeof this[propName] === 'boolean' ? false : newValue;
                });
            };
            // create an array of attributes to observe
            // and also create a map of html attribute name to js property name
            Cstr.observedAttributes = members
                .filter(([_, m]) => m[0] & 15 /* MEMBER_FLAGS.HasAttribute */) // filter to only keep props that should match attributes
                .map(([propName, m]) => {
                const attrName = m[1] || propName;
                attrNameToPropName.set(attrName, propName);
                if (m[0] & 512 /* MEMBER_FLAGS.ReflectAttr */) {
                    cmpMeta.$attrsToReflect$.push([propName, attrName]);
                }
                return attrName;
            });
        }
    }
    return Cstr;
};
const initializeComponent = async (elm, hostRef, cmpMeta, hmrVersionId, Cstr) => {
    // initializeComponent
    if ((hostRef.$flags$ & 32 /* HOST_FLAGS.hasInitializedComponent */) === 0) {
        {
            // we haven't initialized this element yet
            hostRef.$flags$ |= 32 /* HOST_FLAGS.hasInitializedComponent */;
            // lazy loaded components
            // request the component's implementation to be
            // wired up with the host element
            Cstr = loadModule(cmpMeta);
            if (Cstr.then) {
                // Await creates a micro-task avoid if possible
                const endLoad = uniqueTime();
                Cstr = await Cstr;
                endLoad();
            }
            if (!Cstr.isProxied) {
                // we've never proxied this Constructor before
                // let's add the getters/setters to its prototype before
                // the first time we create an instance of the implementation
                {
                    cmpMeta.$watchers$ = Cstr.watchers;
                }
                proxyComponent(Cstr, cmpMeta, 2 /* PROXY_FLAGS.proxyState */);
                Cstr.isProxied = true;
            }
            const endNewInstance = createTime('createInstance', cmpMeta.$tagName$);
            // ok, time to construct the instance
            // but let's keep track of when we start and stop
            // so that the getters/setters don't incorrectly step on data
            {
                hostRef.$flags$ |= 8 /* HOST_FLAGS.isConstructingInstance */;
            }
            // construct the lazy-loaded component implementation
            // passing the hostRef is very important during
            // construction in order to directly wire together the
            // host element and the lazy-loaded instance
            try {
                new Cstr(hostRef);
            }
            catch (e) {
                consoleError(e);
            }
            {
                hostRef.$flags$ &= ~8 /* HOST_FLAGS.isConstructingInstance */;
            }
            {
                hostRef.$flags$ |= 128 /* HOST_FLAGS.isWatchReady */;
            }
            endNewInstance();
            fireConnectedCallback(hostRef.$lazyInstance$);
        }
        if (Cstr.style) {
            // this component has styles but we haven't registered them yet
            let style = Cstr.style;
            const scopeId = getScopeId(cmpMeta);
            if (!styles.has(scopeId)) {
                const endRegisterStyles = createTime('registerStyles', cmpMeta.$tagName$);
                registerStyle(scopeId, style, !!(cmpMeta.$flags$ & 1 /* CMP_FLAGS.shadowDomEncapsulation */));
                endRegisterStyles();
            }
        }
    }
    // we've successfully created a lazy instance
    const ancestorComponent = hostRef.$ancestorComponent$;
    const schedule = () => scheduleUpdate(hostRef, true);
    if (ancestorComponent && ancestorComponent['s-rc']) {
        // this is the initial load and this component it has an ancestor component
        // but the ancestor component has NOT fired its will update lifecycle yet
        // so let's just cool our jets and wait for the ancestor to continue first
        // this will get fired off when the ancestor component
        // finally gets around to rendering its lazy self
        // fire off the initial update
        ancestorComponent['s-rc'].push(schedule);
    }
    else {
        schedule();
    }
};
const fireConnectedCallback = (instance) => {
    {
        safeCall(instance, 'connectedCallback');
    }
};
const connectedCallback = (elm) => {
    if ((plt.$flags$ & 1 /* PLATFORM_FLAGS.isTmpDisconnected */) === 0) {
        const hostRef = getHostRef(elm);
        const cmpMeta = hostRef.$cmpMeta$;
        const endConnected = createTime('connectedCallback', cmpMeta.$tagName$);
        if (!(hostRef.$flags$ & 1 /* HOST_FLAGS.hasConnected */)) {
            // first time this component has connected
            hostRef.$flags$ |= 1 /* HOST_FLAGS.hasConnected */;
            {
                // initUpdate
                // if the slot polyfill is required we'll need to put some nodes
                // in here to act as original content anchors as we move nodes around
                // host element has been connected to the DOM
                if ((cmpMeta.$flags$ & (4 /* CMP_FLAGS.hasSlotRelocation */ | 8 /* CMP_FLAGS.needsShadowDomShim */))) {
                    setContentReference(elm);
                }
            }
            {
                // find the first ancestor component (if there is one) and register
                // this component as one of the actively loading child components for its ancestor
                let ancestorComponent = elm;
                while ((ancestorComponent = ancestorComponent.parentNode || ancestorComponent.host)) {
                    // climb up the ancestors looking for the first
                    // component that hasn't finished its lifecycle update yet
                    if (ancestorComponent['s-p']) {
                        // we found this components first ancestor component
                        // keep a reference to this component's ancestor component
                        attachToAncestor(hostRef, (hostRef.$ancestorComponent$ = ancestorComponent));
                        break;
                    }
                }
            }
            // Lazy properties
            // https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
            if (cmpMeta.$members$) {
                Object.entries(cmpMeta.$members$).map(([memberName, [memberFlags]]) => {
                    if (memberFlags & 31 /* MEMBER_FLAGS.Prop */ && elm.hasOwnProperty(memberName)) {
                        const value = elm[memberName];
                        delete elm[memberName];
                        elm[memberName] = value;
                    }
                });
            }
            {
                initializeComponent(elm, hostRef, cmpMeta);
            }
        }
        else {
            // not the first time this has connected
            // reattach any event listeners to the host
            // since they would have been removed when disconnected
            addHostEventListeners(elm, hostRef, cmpMeta.$listeners$);
            // fire off connectedCallback() on component instance
            fireConnectedCallback(hostRef.$lazyInstance$);
        }
        endConnected();
    }
};
const setContentReference = (elm) => {
    // only required when we're NOT using native shadow dom (slot)
    // or this browser doesn't support native shadow dom
    // and this host element was NOT created with SSR
    // let's pick out the inner content for slot projection
    // create a node to represent where the original
    // content was first placed, which is useful later on
    const contentRefElm = (elm['s-cr'] = doc.createComment(''));
    contentRefElm['s-cn'] = true;
    elm.insertBefore(contentRefElm, elm.firstChild);
};
const disconnectedCallback = (elm) => {
    if ((plt.$flags$ & 1 /* PLATFORM_FLAGS.isTmpDisconnected */) === 0) {
        const hostRef = getHostRef(elm);
        const instance = hostRef.$lazyInstance$ ;
        {
            if (hostRef.$rmListeners$) {
                hostRef.$rmListeners$.map((rmListener) => rmListener());
                hostRef.$rmListeners$ = undefined;
            }
        }
        {
            safeCall(instance, 'disconnectedCallback');
        }
    }
};
const bootstrapLazy = (lazyBundles, options = {}) => {
    const endBootstrap = createTime();
    const cmpTags = [];
    const exclude = options.exclude || [];
    const customElements = win.customElements;
    const head = doc.head;
    const metaCharset = /*@__PURE__*/ head.querySelector('meta[charset]');
    const visibilityStyle = /*@__PURE__*/ doc.createElement('style');
    const deferredConnectedCallbacks = [];
    let appLoadFallback;
    let isBootstrapping = true;
    Object.assign(plt, options);
    plt.$resourcesUrl$ = new URL(options.resourcesUrl || './', doc.baseURI).href;
    lazyBundles.map((lazyBundle) => {
        lazyBundle[1].map((compactMeta) => {
            const cmpMeta = {
                $flags$: compactMeta[0],
                $tagName$: compactMeta[1],
                $members$: compactMeta[2],
                $listeners$: compactMeta[3],
            };
            {
                cmpMeta.$members$ = compactMeta[2];
            }
            {
                cmpMeta.$listeners$ = compactMeta[3];
            }
            {
                cmpMeta.$attrsToReflect$ = [];
            }
            {
                cmpMeta.$watchers$ = {};
            }
            const tagName = cmpMeta.$tagName$;
            const HostElement = class extends HTMLElement {
                // StencilLazyHost
                constructor(self) {
                    // @ts-ignore
                    super(self);
                    self = this;
                    registerHost(self, cmpMeta);
                    if (cmpMeta.$flags$ & 1 /* CMP_FLAGS.shadowDomEncapsulation */) {
                        // this component is using shadow dom
                        // and this browser supports shadow dom
                        // add the read-only property "shadowRoot" to the host element
                        // adding the shadow root build conditionals to minimize runtime
                        {
                            {
                                self.attachShadow({ mode: 'open' });
                            }
                        }
                    }
                }
                connectedCallback() {
                    if (appLoadFallback) {
                        clearTimeout(appLoadFallback);
                        appLoadFallback = null;
                    }
                    if (isBootstrapping) {
                        // connectedCallback will be processed once all components have been registered
                        deferredConnectedCallbacks.push(this);
                    }
                    else {
                        plt.jmp(() => connectedCallback(this));
                    }
                }
                disconnectedCallback() {
                    plt.jmp(() => disconnectedCallback(this));
                }
                componentOnReady() {
                    return getHostRef(this).$onReadyPromise$;
                }
            };
            cmpMeta.$lazyBundleId$ = lazyBundle[0];
            if (!exclude.includes(tagName) && !customElements.get(tagName)) {
                cmpTags.push(tagName);
                customElements.define(tagName, proxyComponent(HostElement, cmpMeta, 1 /* PROXY_FLAGS.isElementConstructor */));
            }
        });
    });
    {
        visibilityStyle.innerHTML = cmpTags + HYDRATED_CSS;
        visibilityStyle.setAttribute('data-styles', '');
        head.insertBefore(visibilityStyle, metaCharset ? metaCharset.nextSibling : head.firstChild);
    }
    // Process deferred connectedCallbacks now all components have been registered
    isBootstrapping = false;
    if (deferredConnectedCallbacks.length) {
        deferredConnectedCallbacks.map((host) => host.connectedCallback());
    }
    else {
        {
            plt.jmp(() => (appLoadFallback = setTimeout(appDidLoad, 30)));
        }
    }
    // Fallback appLoad event
    endBootstrap();
};
const Fragment = (_, children) => children;
const addHostEventListeners = (elm, hostRef, listeners, attachParentListeners) => {
    if (listeners) {
        listeners.map(([flags, name, method]) => {
            const target = getHostListenerTarget(elm, flags) ;
            const handler = hostListenerProxy(hostRef, method);
            const opts = hostListenerOpts(flags);
            plt.ael(target, name, handler, opts);
            (hostRef.$rmListeners$ = hostRef.$rmListeners$ || []).push(() => plt.rel(target, name, handler, opts));
        });
    }
};
const hostListenerProxy = (hostRef, methodName) => (ev) => {
    try {
        {
            if (hostRef.$flags$ & 256 /* HOST_FLAGS.isListenReady */) {
                // instance is ready, let's call it's member method for this event
                hostRef.$lazyInstance$[methodName](ev);
            }
            else {
                (hostRef.$queuedListeners$ = hostRef.$queuedListeners$ || []).push([methodName, ev]);
            }
        }
    }
    catch (e) {
        consoleError(e);
    }
};
const getHostListenerTarget = (elm, flags) => {
    if (flags & 8 /* LISTENER_FLAGS.TargetWindow */)
        return win;
    return elm;
};
// prettier-ignore
const hostListenerOpts = (flags) => (flags & 2 /* LISTENER_FLAGS.Capture */) !== 0;
const hostRefs = /*@__PURE__*/ new WeakMap();
const getHostRef = (ref) => hostRefs.get(ref);
const registerInstance = (lazyInstance, hostRef) => hostRefs.set((hostRef.$lazyInstance$ = lazyInstance), hostRef);
const registerHost = (elm, cmpMeta) => {
    const hostRef = {
        $flags$: 0,
        $hostElement$: elm,
        $cmpMeta$: cmpMeta,
        $instanceValues$: new Map(),
    };
    {
        hostRef.$onInstancePromise$ = new Promise((r) => (hostRef.$onInstanceResolve$ = r));
    }
    {
        hostRef.$onReadyPromise$ = new Promise((r) => (hostRef.$onReadyResolve$ = r));
        elm['s-p'] = [];
        elm['s-rc'] = [];
    }
    addHostEventListeners(elm, hostRef, cmpMeta.$listeners$);
    return hostRefs.set(elm, hostRef);
};
const isMemberInElement = (elm, memberName) => memberName in elm;
const consoleError = (e, el) => (0, console.error)(e, el);
const cmpModules = /*@__PURE__*/ new Map();
const loadModule = (cmpMeta, hostRef, hmrVersionId) => {
    // loadModuleImport
    const exportName = cmpMeta.$tagName$.replace(/-/g, '_');
    const bundleId = cmpMeta.$lazyBundleId$;
    const module = cmpModules.get(bundleId) ;
    if (module) {
        return module[exportName];
    }
    
    if (!hmrVersionId || !BUILD.hotModuleReplacement) {
      const processMod = importedModule => {
        cmpModules.set(bundleId, importedModule);
        return importedModule[exportName];
      }
      switch(bundleId) {
        
        case 'dyte-meeting':
          return __webpack_require__.e(/* import() */ 9319).then(__webpack_require__.bind(__webpack_require__, 29319)).then(processMod, consoleError);
        case 'dyte-ai':
          return __webpack_require__.e(/* import() */ 8798).then(__webpack_require__.bind(__webpack_require__, 98798)).then(processMod, consoleError);
        case 'dyte-ai-chat':
          return __webpack_require__.e(/* import() */ 3343).then(__webpack_require__.bind(__webpack_require__, 83343)).then(processMod, consoleError);
        case 'dyte-ai-home':
          return __webpack_require__.e(/* import() */ 8419).then(__webpack_require__.bind(__webpack_require__, 88419)).then(processMod, consoleError);
        case 'dyte-ai-toggle':
          return __webpack_require__.e(/* import() */ 893).then(__webpack_require__.bind(__webpack_require__, 10893)).then(processMod, consoleError);
        case 'dyte-ai-transcriptions':
          return __webpack_require__.e(/* import() */ 3814).then(__webpack_require__.bind(__webpack_require__, 73814)).then(processMod, consoleError);
        case 'dyte-breakout-rooms-manager':
          return __webpack_require__.e(/* import() */ 9680).then(__webpack_require__.bind(__webpack_require__, 69680)).then(processMod, consoleError);
        case 'dyte-breakout-rooms-toggle':
          return __webpack_require__.e(/* import() */ 6545).then(__webpack_require__.bind(__webpack_require__, 16545)).then(processMod, consoleError);
        case 'dyte-broadcast-message-modal':
          return __webpack_require__.e(/* import() */ 5479).then(__webpack_require__.bind(__webpack_require__, 2691)).then(processMod, consoleError);
        case 'dyte-camera-toggle':
          return __webpack_require__.e(/* import() */ 5329).then(__webpack_require__.bind(__webpack_require__, 35329)).then(processMod, consoleError);
        case 'dyte-channel-creator':
          return __webpack_require__.e(/* import() */ 9660).then(__webpack_require__.bind(__webpack_require__, 49660)).then(processMod, consoleError);
        case 'dyte-chat':
          return __webpack_require__.e(/* import() */ 4667).then(__webpack_require__.bind(__webpack_require__, 4667)).then(processMod, consoleError);
        case 'dyte-chat-toggle':
          return __webpack_require__.e(/* import() */ 573).then(__webpack_require__.bind(__webpack_require__, 70573)).then(processMod, consoleError);
        case 'dyte-clock':
          return __webpack_require__.e(/* import() */ 3585).then(__webpack_require__.bind(__webpack_require__, 73585)).then(processMod, consoleError);
        case 'dyte-confirmation-modal':
          return __webpack_require__.e(/* import() */ 6348).then(__webpack_require__.bind(__webpack_require__, 66348)).then(processMod, consoleError);
        case 'dyte-controlbar':
          return __webpack_require__.e(/* import() */ 1717).then(__webpack_require__.bind(__webpack_require__, 41717)).then(processMod, consoleError);
        case 'dyte-ended-screen':
          return __webpack_require__.e(/* import() */ 7200).then(__webpack_require__.bind(__webpack_require__, 47200)).then(processMod, consoleError);
        case 'dyte-fullscreen-toggle':
          return __webpack_require__.e(/* import() */ 5486).then(__webpack_require__.bind(__webpack_require__, 5486)).then(processMod, consoleError);
        case 'dyte-grid':
          return __webpack_require__.e(/* import() */ 4737).then(__webpack_require__.bind(__webpack_require__, 74737)).then(processMod, consoleError);
        case 'dyte-grid-pagination':
          return __webpack_require__.e(/* import() */ 5203).then(__webpack_require__.bind(__webpack_require__, 55203)).then(processMod, consoleError);
        case 'dyte-header':
          return __webpack_require__.e(/* import() */ 5792).then(__webpack_require__.bind(__webpack_require__, 55792)).then(processMod, consoleError);
        case 'dyte-idle-screen':
          return __webpack_require__.e(/* import() */ 3505).then(__webpack_require__.bind(__webpack_require__, 13505)).then(processMod, consoleError);
        case 'dyte-image-viewer':
          return __webpack_require__.e(/* import() */ 7331).then(__webpack_require__.bind(__webpack_require__, 77331)).then(processMod, consoleError);
        case 'dyte-leave-button':
          return __webpack_require__.e(/* import() */ 7834).then(__webpack_require__.bind(__webpack_require__, 87834)).then(processMod, consoleError);
        case 'dyte-leave-meeting':
          return __webpack_require__.e(/* import() */ 8557).then(__webpack_require__.bind(__webpack_require__, 78557)).then(processMod, consoleError);
        case 'dyte-livestream-indicator':
          return __webpack_require__.e(/* import() */ 969).then(__webpack_require__.bind(__webpack_require__, 60969)).then(processMod, consoleError);
        case 'dyte-livestream-toggle':
          return __webpack_require__.e(/* import() */ 4482).then(__webpack_require__.bind(__webpack_require__, 54482)).then(processMod, consoleError);
        case 'dyte-meeting-title':
          return __webpack_require__.e(/* import() */ 3797).then(__webpack_require__.bind(__webpack_require__, 73797)).then(processMod, consoleError);
        case 'dyte-mic-toggle':
          return __webpack_require__.e(/* import() */ 6676).then(__webpack_require__.bind(__webpack_require__, 66676)).then(processMod, consoleError);
        case 'dyte-mixed-grid':
          return __webpack_require__.e(/* import() */ 7121).then(__webpack_require__.bind(__webpack_require__, 67121)).then(processMod, consoleError);
        case 'dyte-more-toggle':
          return __webpack_require__.e(/* import() */ 1196).then(__webpack_require__.bind(__webpack_require__, 98905)).then(processMod, consoleError);
        case 'dyte-mute-all-button':
          return __webpack_require__.e(/* import() */ 7904).then(__webpack_require__.bind(__webpack_require__, 27904)).then(processMod, consoleError);
        case 'dyte-mute-all-confirmation':
          return __webpack_require__.e(/* import() */ 8327).then(__webpack_require__.bind(__webpack_require__, 28327)).then(processMod, consoleError);
        case 'dyte-name-tag':
          return __webpack_require__.e(/* import() */ 5213).then(__webpack_require__.bind(__webpack_require__, 25213)).then(processMod, consoleError);
        case 'dyte-network-indicator':
          return __webpack_require__.e(/* import() */ 2047).then(__webpack_require__.bind(__webpack_require__, 22047)).then(processMod, consoleError);
        case 'dyte-participant-count':
          return __webpack_require__.e(/* import() */ 8915).then(__webpack_require__.bind(__webpack_require__, 78915)).then(processMod, consoleError);
        case 'dyte-participant-setup':
          return __webpack_require__.e(/* import() */ 4483).then(__webpack_require__.bind(__webpack_require__, 94483)).then(processMod, consoleError);
        case 'dyte-participants':
          return __webpack_require__.e(/* import() */ 1324).then(__webpack_require__.bind(__webpack_require__, 11324)).then(processMod, consoleError);
        case 'dyte-participants-audio':
          return __webpack_require__.e(/* import() */ 597).then(__webpack_require__.bind(__webpack_require__, 50597)).then(processMod, consoleError);
        case 'dyte-participants-stage-list':
          return __webpack_require__.e(/* import() */ 791).then(__webpack_require__.bind(__webpack_require__, 30791)).then(processMod, consoleError);
        case 'dyte-participants-stage-queue':
          return __webpack_require__.e(/* import() */ 6303).then(__webpack_require__.bind(__webpack_require__, 36303)).then(processMod, consoleError);
        case 'dyte-participants-toggle':
          return __webpack_require__.e(/* import() */ 6076).then(__webpack_require__.bind(__webpack_require__, 56076)).then(processMod, consoleError);
        case 'dyte-participants-viewer-list':
          return __webpack_require__.e(/* import() */ 1683).then(__webpack_require__.bind(__webpack_require__, 91683)).then(processMod, consoleError);
        case 'dyte-participants-waiting-list':
          return __webpack_require__.e(/* import() */ 7506).then(__webpack_require__.bind(__webpack_require__, 47506)).then(processMod, consoleError);
        case 'dyte-permissions-message':
          return __webpack_require__.e(/* import() */ 9542).then(__webpack_require__.bind(__webpack_require__, 29542)).then(processMod, consoleError);
        case 'dyte-pip-toggle':
          return __webpack_require__.e(/* import() */ 1001).then(__webpack_require__.bind(__webpack_require__, 1001)).then(processMod, consoleError);
        case 'dyte-plugin-main':
          return __webpack_require__.e(/* import() */ 5472).then(__webpack_require__.bind(__webpack_require__, 25472)).then(processMod, consoleError);
        case 'dyte-plugins':
          return __webpack_require__.e(/* import() */ 6870).then(__webpack_require__.bind(__webpack_require__, 66870)).then(processMod, consoleError);
        case 'dyte-plugins-toggle':
          return __webpack_require__.e(/* import() */ 4327).then(__webpack_require__.bind(__webpack_require__, 84327)).then(processMod, consoleError);
        case 'dyte-polls':
          return __webpack_require__.e(/* import() */ 7394).then(__webpack_require__.bind(__webpack_require__, 57394)).then(processMod, consoleError);
        case 'dyte-polls-toggle':
          return __webpack_require__.e(/* import() */ 9728).then(__webpack_require__.bind(__webpack_require__, 69728)).then(processMod, consoleError);
        case 'dyte-recording-indicator':
          return __webpack_require__.e(/* import() */ 6264).then(__webpack_require__.bind(__webpack_require__, 86264)).then(processMod, consoleError);
        case 'dyte-recording-toggle':
          return __webpack_require__.e(/* import() */ 8286).then(__webpack_require__.bind(__webpack_require__, 8286)).then(processMod, consoleError);
        case 'dyte-remote-access-manager':
          return __webpack_require__.e(/* import() */ 1908).then(__webpack_require__.bind(__webpack_require__, 21908)).then(processMod, consoleError);
        case 'dyte-screen-share-toggle':
          return __webpack_require__.e(/* import() */ 8270).then(__webpack_require__.bind(__webpack_require__, 18270)).then(processMod, consoleError);
        case 'dyte-screenshare-view':
          return __webpack_require__.e(/* import() */ 9246).then(__webpack_require__.bind(__webpack_require__, 89246)).then(processMod, consoleError);
        case 'dyte-settings':
          return __webpack_require__.e(/* import() */ 6253).then(__webpack_require__.bind(__webpack_require__, 96253)).then(processMod, consoleError);
        case 'dyte-settings-toggle':
          return __webpack_require__.e(/* import() */ 6350).then(__webpack_require__.bind(__webpack_require__, 66350)).then(processMod, consoleError);
        case 'dyte-setup-screen':
          return __webpack_require__.e(/* import() */ 605).then(__webpack_require__.bind(__webpack_require__, 70605)).then(processMod, consoleError);
        case 'dyte-sidebar':
          return __webpack_require__.e(/* import() */ 1742).then(__webpack_require__.bind(__webpack_require__, 41742)).then(processMod, consoleError);
        case 'dyte-simple-grid':
          return __webpack_require__.e(/* import() */ 9168).then(__webpack_require__.bind(__webpack_require__, 79168)).then(processMod, consoleError);
        case 'dyte-spotlight-grid':
          return __webpack_require__.e(/* import() */ 7987).then(__webpack_require__.bind(__webpack_require__, 87987)).then(processMod, consoleError);
        case 'dyte-stage':
          return __webpack_require__.e(/* import() */ 7279).then(__webpack_require__.bind(__webpack_require__, 17279)).then(processMod, consoleError);
        case 'dyte-stage-toggle':
          return __webpack_require__.e(/* import() */ 6406).then(__webpack_require__.bind(__webpack_require__, 16406)).then(processMod, consoleError);
        case 'dyte-text-field':
          return __webpack_require__.e(/* import() */ 1461).then(__webpack_require__.bind(__webpack_require__, 51461)).then(processMod, consoleError);
        case 'dyte-ui-provider':
          return __webpack_require__.e(/* import() */ 8863).then(__webpack_require__.bind(__webpack_require__, 48863)).then(processMod, consoleError);
        case 'dyte-viewer-count':
          return __webpack_require__.e(/* import() */ 3570).then(__webpack_require__.bind(__webpack_require__, 3570)).then(processMod, consoleError);
        case 'dyte-waiting-screen':
          return __webpack_require__.e(/* import() */ 2116).then(__webpack_require__.bind(__webpack_require__, 52116)).then(processMod, consoleError);
        case 'dyte-webinar-stage-toggle':
          return __webpack_require__.e(/* import() */ 1976).then(__webpack_require__.bind(__webpack_require__, 21976)).then(processMod, consoleError);
        case 'dyte-ai-caption':
          return __webpack_require__.e(/* import() */ 4627).then(__webpack_require__.bind(__webpack_require__, 34627)).then(processMod, consoleError);
        case 'dyte-breakout-room-manager_3':
          return __webpack_require__.e(/* import() */ 9851).then(__webpack_require__.bind(__webpack_require__, 79851)).then(processMod, consoleError);
        case 'dyte-channel-header_9':
          return __webpack_require__.e(/* import() */ 9413).then(__webpack_require__.bind(__webpack_require__, 39413)).then(processMod, consoleError);
        case 'dyte-livestream-player':
          return __webpack_require__.e(/* import() */ 4310).then(__webpack_require__.bind(__webpack_require__, 84310)).then(processMod, consoleError);
        case 'dyte-poll_2':
          return __webpack_require__.e(/* import() */ 1074).then(__webpack_require__.bind(__webpack_require__, 61074)).then(processMod, consoleError);
        case 'dyte-settings-audio_2':
          return __webpack_require__.e(/* import() */ 8407).then(__webpack_require__.bind(__webpack_require__, 28407)).then(processMod, consoleError);
        case 'dyte-tab-bar':
          return __webpack_require__.e(/* import() */ 6625).then(__webpack_require__.bind(__webpack_require__, 16625)).then(processMod, consoleError);
        case 'dyte-audio-visualizer_2':
          return __webpack_require__.e(/* import() */ 5103).then(__webpack_require__.bind(__webpack_require__, 15103)).then(processMod, consoleError);
        case 'dyte-channel-details':
          return __webpack_require__.e(/* import() */ 2662).then(__webpack_require__.bind(__webpack_require__, 62662)).then(processMod, consoleError);
        case 'dyte-emoji-picker':
          return __webpack_require__.e(/* import() */ 8165).then(__webpack_require__.bind(__webpack_require__, 28165)).then(processMod, consoleError);
        case 'dyte-join-stage_2':
          return __webpack_require__.e(/* import() */ 6154).then(__webpack_require__.bind(__webpack_require__, 66154)).then(processMod, consoleError);
        case 'dyte-notification':
          return __webpack_require__.e(/* import() */ 6409).then(__webpack_require__.bind(__webpack_require__, 56409)).then(processMod, consoleError);
        case 'dyte-participant':
          return __webpack_require__.e(/* import() */ 4311).then(__webpack_require__.bind(__webpack_require__, 14311)).then(processMod, consoleError);
        case 'dyte-participant-tile':
          return __webpack_require__.e(/* import() */ 6383).then(__webpack_require__.bind(__webpack_require__, 56383)).then(processMod, consoleError);
        case 'dyte-spotlight-indicator':
          return __webpack_require__.e(/* import() */ 3182).then(__webpack_require__.bind(__webpack_require__, 43182)).then(processMod, consoleError);
        case 'dyte-chat-message_5':
          return __webpack_require__.e(/* import() */ 8421).then(__webpack_require__.bind(__webpack_require__, 48421)).then(processMod, consoleError);
        case 'dyte-dialog':
          return __webpack_require__.e(/* import() */ 5838).then(__webpack_require__.bind(__webpack_require__, 95838)).then(processMod, consoleError);
        case 'dyte-logo':
          return __webpack_require__.e(/* import() */ 6041).then(__webpack_require__.bind(__webpack_require__, 96041)).then(processMod, consoleError);
        case 'dyte-menu_3':
          return __webpack_require__.e(/* import() */ 8861).then(__webpack_require__.bind(__webpack_require__, 38861)).then(processMod, consoleError);
        case 'dyte-avatar':
          return __webpack_require__.e(/* import() */ 7311).then(__webpack_require__.bind(__webpack_require__, 37311)).then(processMod, consoleError);
        case 'dyte-controlbar-button':
          return __webpack_require__.e(/* import() */ 3394).then(__webpack_require__.bind(__webpack_require__, 3394)).then(processMod, consoleError);
        case 'dyte-tooltip':
          return __webpack_require__.e(/* import() */ 6897).then(__webpack_require__.bind(__webpack_require__, 16897)).then(processMod, consoleError);
        case 'dyte-spinner':
          return __webpack_require__.e(/* import() */ 6013).then(__webpack_require__.bind(__webpack_require__, 6013)).then(processMod, consoleError);
        case 'dyte-button':
          return __webpack_require__.e(/* import() */ 3692).then(__webpack_require__.bind(__webpack_require__, 33692)).then(processMod, consoleError);
        case 'dyte-icon':
          return __webpack_require__.e(/* import() */ 8888).then(__webpack_require__.bind(__webpack_require__, 78888)).then(processMod, consoleError);
      }
    }
    return __webpack_require__(98654)(`./${bundleId}.entry.js`).then((importedModule) => {
        {
            cmpModules.set(bundleId, importedModule);
        }
        return importedModule[exportName];
    }, consoleError);
};
const styles = /*@__PURE__*/ new Map();
const win = typeof window !== 'undefined' ? window : {};
const doc = win.document || { head: {} };
const plt = {
    $flags$: 0,
    $resourcesUrl$: '',
    jmp: (h) => h(),
    raf: (h) => requestAnimationFrame(h),
    ael: (el, eventName, listener, opts) => el.addEventListener(eventName, listener, opts),
    rel: (el, eventName, listener, opts) => el.removeEventListener(eventName, listener, opts),
    ce: (eventName, opts) => new CustomEvent(eventName, opts),
};
const promiseResolve = (v) => Promise.resolve(v);
const supportsConstructableStylesheets = /*@__PURE__*/ (/* unused pure expression or super */ null && ((() => {
        try {
            new CSSStyleSheet();
            return typeof new CSSStyleSheet().replaceSync === 'function';
        }
        catch (e) { }
        return false;
    })()))
    ;
const queueDomReads = [];
const queueDomWrites = [];
const queueTask = (queue, write) => (cb) => {
    queue.push(cb);
    if (!queuePending) {
        queuePending = true;
        if (write && plt.$flags$ & 4 /* PLATFORM_FLAGS.queueSync */) {
            nextTick(flush);
        }
        else {
            plt.raf(flush);
        }
    }
};
const consume = (queue) => {
    for (let i = 0; i < queue.length; i++) {
        try {
            queue[i](performance.now());
        }
        catch (e) {
            consoleError(e);
        }
    }
    queue.length = 0;
};
const flush = () => {
    // always force a bunch of medium callbacks to run, but still have
    // a throttle on how many can run in a certain time
    // DOM READS!!!
    consume(queueDomReads);
    // DOM WRITES!!!
    {
        consume(queueDomWrites);
        if ((queuePending = queueDomReads.length > 0)) {
            // still more to do yet, but we've run out of time
            // let's let this thing cool off and try again in the next tick
            plt.raf(flush);
        }
    }
};
const nextTick = /*@__PURE__*/ (cb) => promiseResolve().then(cb);
const writeTask = /*@__PURE__*/ queueTask(queueDomWrites, true);




/***/ }),

/***/ 46503:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ onChange),
/* harmony export */   s: () => (/* binding */ state)
/* harmony export */ });
/* harmony import */ var _index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65733);


const appendToMap = (map, propName, value) => {
    const items = map.get(propName);
    if (!items) {
        map.set(propName, [value]);
    }
    else if (!items.includes(value)) {
        items.push(value);
    }
};
const debounce = (fn, ms) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            timeoutId = 0;
            fn(...args);
        }, ms);
    };
};

/**
 * Check if a possible element isConnected.
 * The property might not be there, so we check for it.
 *
 * We want it to return true if isConnected is not a property,
 * otherwise we would remove these elements and would not update.
 *
 * Better leak in Edge than to be useless.
 */
const isConnected = (maybeElement) => !('isConnected' in maybeElement) || maybeElement.isConnected;
const cleanupElements = debounce((map) => {
    for (let key of map.keys()) {
        map.set(key, map.get(key).filter(isConnected));
    }
}, 2000);
const stencilSubscription = () => {
    if (typeof _index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.a !== 'function') {
        // If we are not in a stencil project, we do nothing.
        // This function is not really exported by @stencil/core.
        return {};
    }
    const elmsToUpdate = new Map();
    return {
        dispose: () => elmsToUpdate.clear(),
        get: (propName) => {
            const elm = (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.a)();
            if (elm) {
                appendToMap(elmsToUpdate, propName, elm);
            }
        },
        set: (propName) => {
            const elements = elmsToUpdate.get(propName);
            if (elements) {
                elmsToUpdate.set(propName, elements.filter(_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.f));
            }
            cleanupElements(elmsToUpdate);
        },
        reset: () => {
            elmsToUpdate.forEach((elms) => elms.forEach(_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.f));
            cleanupElements(elmsToUpdate);
        },
    };
};

const unwrap = (val) => (typeof val === 'function' ? val() : val);
const createObservableMap = (defaultState, shouldUpdate = (a, b) => a !== b) => {
    const unwrappedState = unwrap(defaultState);
    let states = new Map(Object.entries(unwrappedState !== null && unwrappedState !== void 0 ? unwrappedState : {}));
    const handlers = {
        dispose: [],
        get: [],
        set: [],
        reset: [],
    };
    const reset = () => {
        var _a;
        // When resetting the state, the default state may be a function - unwrap it to invoke it.
        // otherwise, the state won't be properly reset
        states = new Map(Object.entries((_a = unwrap(defaultState)) !== null && _a !== void 0 ? _a : {}));
        handlers.reset.forEach((cb) => cb());
    };
    const dispose = () => {
        // Call first dispose as resetting the state would
        // cause less updates ;)
        handlers.dispose.forEach((cb) => cb());
        reset();
    };
    const get = (propName) => {
        handlers.get.forEach((cb) => cb(propName));
        return states.get(propName);
    };
    const set = (propName, value) => {
        const oldValue = states.get(propName);
        if (shouldUpdate(value, oldValue, propName)) {
            states.set(propName, value);
            handlers.set.forEach((cb) => cb(propName, value, oldValue));
        }
    };
    const state = (typeof Proxy === 'undefined'
        ? {}
        : new Proxy(unwrappedState, {
            get(_, propName) {
                return get(propName);
            },
            ownKeys(_) {
                return Array.from(states.keys());
            },
            getOwnPropertyDescriptor() {
                return {
                    enumerable: true,
                    configurable: true,
                };
            },
            has(_, propName) {
                return states.has(propName);
            },
            set(_, propName, value) {
                set(propName, value);
                return true;
            },
        }));
    const on = (eventName, callback) => {
        handlers[eventName].push(callback);
        return () => {
            removeFromArray(handlers[eventName], callback);
        };
    };
    const onChange = (propName, cb) => {
        const unSet = on('set', (key, newValue) => {
            if (key === propName) {
                cb(newValue);
            }
        });
        // We need to unwrap the defaultState because it might be a function.
        // Otherwise we might not be sending the right reset value.
        const unReset = on('reset', () => cb(unwrap(defaultState)[propName]));
        return () => {
            unSet();
            unReset();
        };
    };
    const use = (...subscriptions) => {
        const unsubs = subscriptions.reduce((unsubs, subscription) => {
            if (subscription.set) {
                unsubs.push(on('set', subscription.set));
            }
            if (subscription.get) {
                unsubs.push(on('get', subscription.get));
            }
            if (subscription.reset) {
                unsubs.push(on('reset', subscription.reset));
            }
            if (subscription.dispose) {
                unsubs.push(on('dispose', subscription.dispose));
            }
            return unsubs;
        }, []);
        return () => unsubs.forEach((unsub) => unsub());
    };
    const forceUpdate = (key) => {
        const oldValue = states.get(key);
        handlers.set.forEach((cb) => cb(key, oldValue, oldValue));
    };
    return {
        state,
        get,
        set,
        on,
        onChange,
        use,
        dispose,
        reset,
        forceUpdate,
    };
};
const removeFromArray = (array, item) => {
    const index = array.indexOf(item);
    if (index >= 0) {
        array[index] = array[array.length - 1];
        array.length--;
    }
};

const createStore = (defaultState, shouldUpdate) => {
    const map = createObservableMap(defaultState, shouldUpdate);
    map.use(stencilSubscription());
    return map;
};

const { state, onChange } = createStore({});




/***/ })

};
;