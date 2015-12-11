// Copyright 2015 Traceur Authors.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {Loader} from './Loader.js';
import {LoaderCompiler} from './LoaderCompiler.js';
import {BrowserTraceurLoader} from './TraceurLoader.js';
import {NodeLoaderCompiler} from '../node/NodeLoaderCompiler.js';
import {InlineLoaderCompiler} from './InlineLoaderCompiler.js';
import {NodeTraceurLoader} from './NodeTraceurLoader.js';
import {TraceurLoader} from './TraceurLoader.js';

export let runtime = {
  BrowserTraceurLoader,
  InlineLoaderCompiler,
  Loader,
  LoaderCompiler,
  NodeLoaderCompiler,
  NodeTraceurLoader,
  TraceurLoader
};
