// Copyright 2015 Google Inc. All Rights Reserved.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
goog.provide('cast.games.spellcast.State');



/**
 * Defines a state that responds to connects, disconnects, and messages from
 * the receiver and used by
 * {@link cast.games.spellcast.StateMachine}.
 * @interface
 */
cast.games.spellcast.State = function() {};


/**
 * Used to implement when the state machine is going to this state.
 * @param {cast.games.spellcast.messages.GameStateId} previousStateId
 */
cast.games.spellcast.State.prototype.onEnter;


/**
 * Used to implement when the state machine is updating this state.
 */
cast.games.spellcast.State.prototype.onUpdate;


/**
 * Used to implement when the state machine is exiting this state.
 * @param {cast.games.spellcast.messages.GameStateId} nextStateId
 */
cast.games.spellcast.State.prototype.onExit;
