/*
 * Properties
 */
declare var application:Application;
// var administrator = application.administrator;
declare var console = application.console;
declare var directory = application.directory;
//var ds = application.ds;
declare var httpServer = application.httpServer;
// var name = application.name;
// var os = application.os;
// var permissions = application.permissions;
// var process = application.process;
declare var sessionStorage = application.sessionStorage;
// var settings = application.settings;
// var solution = application.solution;
// var storage = application.storage;
// var wildchar = application.wildchar;
/*
 * Methods
 */
// var JSONToXml = application.JSONToXml;
declare var Mutex = application.Mutex;
// var ProgressIndicator = application.ProgressIndicator;
// var XmlToJSON = application.XmlToJSON;
// var addHttpRequestHandler = application.addHttpRequestHandler;
declare var addRemoteStore = application.addRemoteStore;
declare var backupDataStore = application.backupDataStore;
// var clearInterval = application.clearInterval;
// var clearTimeout = application.clearTimeout;
declare var close = application.close;
declare var compactDataStore = application.compactDataStore;
// var createUserSession = application.createUserSession;
// var currentSession = application.currentSession;
// var currentUser = application.currentUser;
// var dateToIso = application.dateToIso;
// var displayNotification = application.displayNotification;
declare var exitWait = application.exitWait;
// var garbageCollect = application.garbageCollect;
declare var generateUUID = application.generateUUID;
declare var getBackupRegistry = application.getBackupRegistry;
declare var getBackupSettings = application.getBackupSettings;
// var getFolder = application.getFolder;
// var getItemsWithRole = application.getItemsWithRole;
// var getJobManager = application.getJobManager;
declare var getJournalInfo = application.getJournalInfo;
declare var getLastBackups = application.getLastBackups;
// var getProgressIndicator = application.getProgressIndicator;
// var getSession = application.getSession;
// var getSettingFile = application.getSettingFile;
// var getURL = application.getURL;
// var getURLPath = application.getURLPath;
// var getURLQuery = application.getURLQuery;
// var getUserSessions = application.getUserSessions;
// var getWalibFolder = application.getWalibFolder;
// var importScripts = application.importScripts;
// var include = application.include;
declare var integrateDataStoreJournal = application.integrateDataStoreJournal;
// var isoToDate = application.isoToDate;
declare var loadImage = application.loadImage;
declare var loadText = application.loadText;
// var loginByKey = application.loginByKey;
// var loginByPassword = application.loginByPassword;
// var logout = application.logout;
declare var openRemoteStore = application.openRemoteStore;
// var removeHttpRequestHandler = application.removeHttpRequestHandler;
declare var repairDataStore = application.repairDataStore;
// var requestFileSystemSync = application.requestFileSystemSync;
declare var require = application.require;
declare var requireNode = application.requireNode;
declare var resetDataStoreJournal = application.resetDataStoreJournal;
// var resolveLocalFileSystemSyncURL = application.resolveLocalFileSystemSyncURL;
declare var restoreDataStore = application.restoreDataStore;
declare var saveText = application.saveText;
// var setCurrentSession = application.setCurrentSession;
// var setInterval = application.setInterval;
// var setTimeout = application.setTimeout;
declare var verifyDataStore = application.verifyDataStore;
declare var wait = application.wait;

/*
 * Constructors
 */
declare var BinaryStream = application.BinaryStream;
declare var Blob = application.Blob;
declare var Buffer = application.Buffer;
declare var File = application.File;
// var FileSystemSync = application.FileSystemSync;
declare var Folder = application.Folder;
declare var SharedWorker = application.SharedWorker;
declare var NodeWorker = application.NodeWorker;
declare var SystemWorker = application.SystemWorker;
declare var TextStream = application.TextStream;
// var Worker = application.Worker;
declare var XMLHttpRequest = application.XMLHttpRequest;

interface Application extends WAKAuthentication, WAKData, WAKCore, WAKThreads, WAKFileSystem, WAKHTTP, WAKStorage { }

interface WAKAuthentication {
    /**
     * References the directory of the application.
     */
    directory : WAKDirectory;
}

interface WAKData {
    /**
     * References the datastore of the application.
     */
    ds: Datastore;
    /**
    *Starts the backup of the closed datastore defined by model and data.
    */
    backupDataStore(model: WAKFileInstance, data: WAKFileInstance, settings: Object, options?: Object): WAKFileInstance;
    /**
    *Compacts the datastore's data file designated by model and data, and generates the compactedData data file.
    */
    compactDataStore(model: WAKFileInstance, data: WAKFileInstance, options?: Object, compactedData?: WAKFileInstance): void;
    /**
    *Returns an Array that lists the 20 most recent backup manifests recorded in the specified backup registry.
    */
    getBackupRegistry(registryFolder: WAKFolderInstance): Array<Object>;
    /**
    *Returns an Object containing the default backup settings for the solution.
    */
    getBackupSettings(): Object;
    /**
    *Returns information about the journal of the datastore whose data file you passed in dataFile.
    */
    getJournalInfo(dataFile: WAKFileInstance, options?: Object): Object;
    /**
    *Returns information about the journal of the datastore whose data file you passed in dataFile.
    */
    getJournalInfo(dataFile: String, options?: Object): Object;
    /**
    *Returns an Array that lists the 20 most recent backup manifests recorded in the backup registry default folder of the application.
    */
    getLastBackups(): Array<Object>;
    /**
    *Allows you to partially or fully integrate a journal file into a datastore.
    */
    integrateDataStoreJournal(model: WAKFileInstance, data: WAKFileInstance, journal: WAKFileInstance, options?: Object): Object;
    /**
    *Repairs the datastore's data file defined by model and data, and generates the repairedData data file.
    */
    repairDataStore(model: WAKFileInstance, data: WAKFileInstance, options?: Object, repairedData?: WAKFileInstance): void;
    /**
    *Resets the current journal of the datastore whose data file you passed in dataFile.
    */
    resetDataStoreJournal(dataFile: WAKFileInstance): Object;
    /**
    *Resets the current journal of the datastore whose data file you passed in dataFile.
    */
    resetDataStoreJournal(dataFile: String): Object;
    /**
    *Allows you to restore a data folder previously archived.
    */
    restoreDataStore(manifest: WAKFileInstance, restoreFolder: WAKFolderInstance, options?: Object): Object;
    /**
    *Allows you to restore a data folder previously archived.
    */
    restoreDataStore(config: Object, options?: Object): Object;
    /**
    *Verifies the internal structure of the objects contained in the datastore designated by model and data.
    */
    verifyDataStore(model: WAKFileInstance, data: WAKFileInstance, options: Object): void;
}

interface WAKCore {
    /**
     * References the console of the application.
     */
    console: WAKConsole;
    /**
     * References the buffer constructor.
     */
    Buffer: WAKBufferInstance;
    /**
     * Creates a valid UUID string.
     * 
     * ```javascript
     * generateUUID();
     * // 9AE457F4B557BD7895AD4712345ABCDE
     * ```
     * 
     * @returns Returns a string with the generated UUID
     */
    generateUUID(): String;
    /**
     * Gets the named progress indicator object.
     */
    getProgressIndicator(name: String): ProgressIndicator;
    /**
     * Creates a progress indicator.
     * @param numElements Number of elements to count
     * @param sessionName Name of execution session for progress indicator
     * @param stoppable `true` if the progress indicator can be stopped, `false` otherwise
     * @param unused Not used, always pass an empty string ("")	
     * @param name Unique name of object on the server
     */
    ProgressIndicator(numElements: Number, sessionName?: String, stoppable?: Boolean, unused?: String, name?: String): ProgressIndicator;
}

interface WAKThreads {
    /**
     * Ends the current thread.
     * 
     * ```javascript
     * close();
     * ```
     */
    close(): void;
    /**
     * Exit pending `wait()` in the current thread. Does not impact pending `wait()` in other threads.
     * 
     * ```javascript
     * exitWait();
     * ```
     */
    exitWait(): void;
    /**
     * References the node worker constructor.
     */
    NodeWorker: NodeWorker;
    /**
     * References the shared worker constructor.
     */
    SharedWorker: SharedWorker;
    /**
     * References the system worker constructor.
     */
    SystemWorker: SystemWorker;
    /**
     * References the mutex constructor.
     */
    Mutex: Mutex;
    /**
     * Requires an SSJS module (CommonJS compliant).
     * This module must be defined in `PROJECT/modules/`.
     * 
     * ```javascript
     * // Get the module defined in PROJECT/modules/mail
     * var mail = require('mail');
     * // Get the module defined in PROJECT/modules/customers/platinium
     * var platiniumCustomers = require('/customers/platinium'); 
     * ```
     * 
     * @param moduleId Describes the module id and path
     * @returns Returns the exported API of the given module
     */
    require(moduleId: String): Module;
    /**
     * Requires a NodeJS module.
     * This module must be defined in `PROJECT/node_modules`.
     * 
     * ```javascript
     * // Get the Node module defined in PROJECT/node_modules/http
     * var http = requireNode('http'); 
     * ```
     * 
     * @warning This API is only available inside a Node worker (See NodeWorker for more details)
     * @param moduleId Describes the module id and path
     * @returns Returns the exported API of the given module
     */
    requireNode(moduleId: String): Module;
    /**
     * Allows a thread to handle events and to continue to exist after the complete code executes.
     * 
     * ```javascript
     * // Wait for 100ms
     * wait(100);
     * // Wait for the end of time
     * wait();
     * ```
     * 
     * @param timeout Milliseconds to wait for. If none, it's an infinite wait. Can be squeeze with an `exitWait()`.
     */
    wait(timeout?: Number): void;
}

interface WAKFileSystem {
    BinaryStream: BinaryStream;
    Blob: Blob;
    File: File;
    Folder: Folder;
    TextStream: TextStream;
    /**
     * Loads an image from its path.
     * 
     * ```javascript
     * var myPict = loadImage( 'C:/images/tulips.jpg' );
     * var newPict = new ds.Pict();
      * newPict.name = 'Flower';
     * newPict.photo = myPict;
     * newPict.save();
     * ```
     * 
     * @warning The Image API is partially supported on Linux platforms:
     * - You can only load images of the PNG or JPG types
     * - For more details, check [doc center](http://doc.wakanda.org/home2.en.html#/Images/Image-Instances.201-659829.en.html)
     * @param file Image path to load (POSIX path). Supports PNG and JPG files.
     * @returns Returns the image through Image object.
     */
    loadImage(file: String): Image;
    /**
     * Loads an image from a File object.
     * 
     * ```javascript
     * var myFile = new File( 'C:/images/tulips.jpg' );
     * var myPict = loadImage(myFile);
     * var newPict = new ds.Pict();
     * newPict.name = 'Flower';
     * newPict.photo = myPict;
     * newPict.save();
     * ```
     * 
     * @warning The Image API is partially supported on Linux platforms:
     * - You can only load images of the PNG or JPG types
     * - For more details, check [doc center](http://doc.wakanda.org/home2.en.html#/Images/Image-Instances.201-659829.en.html)
     * @param file File object that reference an image. Supports PNG and JPG files.
     * @returns Returns the image through Image object.
     */
    loadImage(file: WAKFileInstance): Image;
    /**
     * Loads the content of a text file from its path.
     * 
     * ```javascript
     * var myText = loadText( 'PROJECT/bootstrap.js' );
     * console.log(myText);
     * ```
     * 
     * @param file File path to load (POSIX path).
     * @param charset (default: 7) Defines the charset to use to read the file. See [charset values](http://doc.wakanda.org/home2.en.html#/Wakanda/0.Beta/TextStream.301-684310.en.html) for more details.
     * @returns Returns a string with the full text file content.
     */
    loadText(file: String, charset?: Number): String;
    /**
     * Loads the content of a text file from a File object.
     * 
     * ```javascript
     * var myFile = new File( 'PROJECT/bootstrap.js' );
     * var myText = loadText( myFile );
     * console.log( myText );
     * ```
     * 
     * @param file File object that reference a text file.
     * @param charset (default: 7) Defines the charset to use to read the file. See [charset values](http://doc.wakanda.org/home2.en.html#/Wakanda/0.Beta/TextStream.301-684310.en.html) for more details.
     * @returns Returns a string with the full text file content.
     */
    loadText(file: WAKFileInstance, charset?: Number): String;
    /**
     * Saves the text into a file.
     * 
     * ```javascript
     * saveText( 'Hello World ! Here is my text saved.', 'C:/texts/chapter-1.txt' );
     * ```
     * 
     * @param textToSave Text string to save.
     * @param file File path where to update (POSIX path).
     * @param charset (default: 7) Defines the charset of the text string. See [charset values](http://doc.wakanda.org/home2.en.html#/Wakanda/0.Beta/TextStream.301-684310.en.html) for more details.
     */
    saveText(textToSave: String, file: String, charset?: Number): void;
    /**
     * Saves the text into a file.
     * 
     * ```javascript
     * var myFile = new File( 'C:/texts/chapter-1.txt' );
     * saveText( 'Hello World ! Here is my text saved.', myFile );
     * ```
     * 
     * @param textToSave Text string to save.
     * @param file File path where to update (POSIX path).
     * @param charset (default: 7) Defines the charset of the text string. See [charset values](http://doc.wakanda.org/home2.en.html#/Wakanda/0.Beta/TextStream.301-684310.en.html) for more details.
     */
    saveText(textToSave: String, file: WAKFileInstance, charset?: Number): void;
}

interface WAKHTTP {
    /**
     * Reference the HTTP server of the application.
     */
    httpServer: HttpServer;
    XMLHttpRequest: XMLHttpRequest;
}

interface WAKStorage {
    /**
     * References the HTTP session storage of the application.
     */
    sessionStorage: LockableKeyValueStorage;
    /**
     * References the application storage.
     */
    storage: LockableKeyValueStorage;

}





interface BinaryStream {
    /**
     * Creates a new BinaryStream object.
     * 
     * ```javascript
     * var readstream = new BinaryStream( 'PROJECT/logs/HTTPServer.waLog' );
     * console.log( '[chunck] '+ readstream.getBuffer(1000).toString() );
     * // Important to close the stream after every use to release the referenced file
     * readstream.close();
     * ```
     * 
     * @param binary Describes the binary to read/write.
     * @param readMode (default: `read`) `Write` if in write mode, `Read` otherwise.
     */
    new (binary: String, readMode?: String): WAKBinaryStreamInstance;
    /**
     * Creates a new BinaryStream object.
     * 
     * ```javascript
     * var myFile = new File( 'PROJECT/logs/HTTPServer.waLog' );
     * var readstream = new BinaryStream( myFile );
     * console.log( '[chunck] '+ readstream.getBuffer(1000).toString() );
     * // Important to close the stream after every use to release the referenced file
     * readstream.close();
     * ```
     * 
     * @param binary Describes the binary to read/write.
     * @param readMode (default: `read`) `Write` if in write mode, `Read` otherwise.
     */
    new (binary: WAKFileInstance, readMode?: String): WAKBinaryStreamInstance;
}

interface WAKBinaryStreamInstance {
    /**
     * Indicates that the next reading of structured values in the BinaryStream object requires a byte swap
     */
    changeByteOrder(): void;
    /**
     * Closes the file referenced in the BinaryStream object.
     * 
     * ```javascript
     * var myFile = new File( 'PROJECT/logs/HTTPServer.waLog' );
     * var readstream = new BinaryStream( myFile );
     * // Important to close the stream after every use to release the referenced file
     * readstream.close();
     * ```
     * @throw may throw exception if an error occur
     */
    close(): void;
    /**
     * Saves the buffer contents to the disk file referenced in the BinaryStream object.
     *  @throw may throw exception if an error occur
     */
    flush(): void;
    /**
     * Creates a new BLOB object containing the next sizeToRead data in the BinaryStream object.
     * @throw may throw exception if an error occur
     */
    getBlob(sizeToRead: Number): WAKBlobInstance;
    /**
     * Returns a new Buffer object containing the next sizeToRead data in the BinaryStream object. Otherwise, return null
     * @throw may throw exception if an error occur
     */
    getBuffer(sizeToRead: Number): WAKBufferInstance;
    /**
     * Returns a number representing the next byte from the BinaryStream object. Otherwise, return null
     * @throw may throw exception if an error occur
     */
    getByte(): Number;
    /**
     * Returns the next long number (if present) from the BinaryStream object. Otherwise, return null
     * @throw may throw exception if an error occur
     */
    getLong(): Number;
    /**
     * Returns the next long64 number (if present) from the BinaryStream object. Otherwise, return null
     * @throw may throw exception if an error occur
     */
    getLong64(): Number;
    /**
     * Returns the current position of the cursor in the BinaryStream object. Otherwise, return null
     */
    getPos(): Number;
    /**
     * Returns the next real (if present) from the BinaryStream object. Otherwise, return null
     */
    getReal(): Number;
    /**
     * Returns the size of the stream.
     */
    getSize(): Number;
    /**
     * Returns the next string (if present) from the BinaryStream object. Otherwise, return null
     * @throw may throw exception if an error occur
     */
    getString(): String;
    /**
     * Returns the next word, i.e., a binary integer (if present) from the BinaryStream object. Otherwise, return null
     * @throw may throw exception if an error occur
     */
    getWord(): Number;
    /**
     * `true` if the current data reading in the BinaryStream object is in byte swap mode.
     */
    isByteSwapping(): Boolean;
    /**
     * Writes the BLOB you passed as the blob parameter in the BinaryStream object at the current cursor location.
      * @throw may throw exception if an error occur
     */
    putBlob(blob: WAKBlobInstance, offset: Number, size?: Number): void;
    /**
     * Writes the Buffer you passed as the buffer parameter in the BinaryStream object at the current cursor location.
     * @throw may throw exception if an error occur
     */
    putBuffer(buffer: WAKBufferInstance, offset: Number, size?: Number): void;
    /**
     * Writes the byte value you passed as the parameter in the BinaryStream object at the current cursor location.
      * @throw may throw exception if an error occur
     */
    putByte(byteValue: Number): void;
    /**
     * Writes the long value you passed as the parameter in the BinaryStream object at the current cursor location.
     * @throw may throw exception if an error occur
     */
    putLong(longValue: Number): void;
    /**
     * Writes the long64 value you passed as the parameter in the BinaryStream object at the current cursor location.
     * @throw may throw exception if an error occur
     */
    putLong64(long64Value: Number): void;
    /**
     * Writes the real value you passed as the parameter in the BinaryStream object at the current cursor location.
     * @throw may throw exception if an error occur
     */
    putReal(realValue: Number): void;
    /**
     * Writes the string value you passed as the parameter in the BinaryStream object at the current cursor location.
     * @throw may throw exception if an error occur
     */
    putString(url: String): void;
    /**
     * Writes the byte word (i.e., an integer value) you passed as the parameter in the BinaryStream object at the current cursor location.
     * @throw may throw exception if an error occur
     */
    putWord(wordValue: Number): void;
    /**
     * Moves the stream cursor to the position you passed in offset in the BinaryStream object.
     * @throw may throw exception if an error occur
     */
    setPos(offset: Number): void;
}



interface Blob {
    /**
     * Creates a new blob.
     * 
     * ```javascript
     * var myBlob = new Blob( 20 , 88, 'application/octet-stream');
     * var myString = myBlob.toString();
     * // XXXXXXXXXXXXXXXXXXXX
     * ```
     * 
     * @param size (default: 0 byte) Size of the new Blob
     * @param defaultByteValue (default: `0`) Defines the character code set as the default value to each blob byte
     * @param mimeType Defines the media type of the Blob
     */
    new (size?: Number, defaultByteValue?: Number, mimeType?: String): WAKBlobInstance;
}

interface WAKBlobInstance {
    /**
     * Size of the Blob in bytes.
     */
    readonly size: number;
    /**
     * Media type of the Blob expressed as MIME or "" if unknown.
     */
    readonly type: string;
    /**
     * Copies the blob into a file.
     * 
     * #### Example 1: Copy a blob
     * ```javascript
     * var myBlob = new Blob( 20 ); 
     * myBlob.copyTo( 'PROJECT/blob_copy.js' );
     * ```
     * or
     * ```javascript
     * var myFile = new File( 'PROJECT/blob_copy.js' );
     * var myBlob = new Blob( 20 ); 
     * myBlob.copyTo( myFile );
     * ```
     * 
     * #### Example 2: Copy a file
     * ```javascript
     * var myFile = new File( 'PROJECT/bootstrap.js' );
     * myFile.copyTo( 'PROJECT/bootstrap_copy.js' );
     * ```
     * or
     * ```javascript
     * var myFile = new File( 'PROJECT/bootstrap.js' );
     * var myFileCopy = new File( 'PROJECT/bootstrap_copy.js' );
     * myFile.copyTo( myFileCopy );
     * ```
     * 
     * @param destination Destination file
     * @param overwrite `true` to override existing file if any, `false` otherwise
     */
    copyTo(destination: String, overwrite?: Boolean): void;
    copyTo(destination: WAKFileInstance, overwrite?: Boolean): void;
    /**
     * Creates a new blob by referencing the binary contents of the File to which it is applied, from start to end.
     * 
     * #### Example 1: Slice a blob
     * ```javascript
     * var myBlob = new Blob( 20 , 88, 'application/octet-stream' );
     * console.log( myBlob.toString() );
     * // XXXXXXXXXXXXXXXXXXXX
     * var mySlicedBlob = myBlob.slice( 5, 10 );
     * console.log( mySlicedBlob.toString() );
     * // XXXXX
     * ```
     * 
     * #### Example 2: Slice a blob
     * ```javascript
     * var myBlob = new Blob( 20 , 88, 'application/octet-stream' );
     * console.log( myBlob.toString() );
     * // XXXXXXXXXXXXXXXXXXXX
     * var mySlicedBlob = myBlob.slice( 0, -5 );
     * console.log( mySlicedBlob.toString() );
     * // XXXXXXXXXXXXXXX
     * ```
     * 
     * #### Example 3: Slice a file
     * ```javascript
     * var myFile = new File( 'PROJECT/bootstrap.js' );
     * var myBlobSlice = myFile.slice( 0, 100 );
     * console.log( myBlobSlice.toString() );
     * ```
     * 
     * @param start (default: 0)
     * @param end (default: blob.size)
     * @param mimeType
     */
    slice(start?: Number, end?: Number, mimeType?: String): WAKBlobInstance;
    /**
     * Returns a buffer object containing a copy of the File bytes.
     */
    toBuffer(): WAKBufferInstance;
    /**
     * Get a string representation of the blob contents.
     */
    toString(stringFormat?: String): String;
}


interface Buffer {
    /**
     * Creates a new buffer.
     * 
     * ```javascript
     * var myBufferInstance = new Buffer( 16*1024 );
     * var myBufferInstance = new Buffer( 16*1024, 'utf8' );
     * ```
     * 
     * @param size The number of bytes to allocate for the buffer
     * @param encoding (default: `utf8`) Encoding available: `ascii`, `utf8`, `ucs2`, `hex`, `base64`
     */
    new (size: Number, encoding?: String): WAKBufferInstance;
    /**
     * Returns the string byte length.
     * Byte length may change depending of the encoding type.
     * 
     * ```javascript
     * var myByteLength = Buffer.byteLength( 'Hello Buffer World !' );
     * console.log(myByteLength);
     * // 20
     * ```
     * 
     * @param str String to evaluate
     * @param encoding (default: `utf8`) Encoding available: `ascii`, `utf8`, `ucs2`, `hex`, `base64`
     */
    byteLength(str: String, encoding?: String): Number;
    /**
     * Checks if the object is a buffer.
     * 
     * #### Example 1: Is my string a buffer ?
     * ```javascript
     * var isBuffer = Buffer.isBuffer( 'Hello Buffer World !' );
     * console.log( isBuffer );
     * // false
     * ```
     * 
     * #### Example 2: Is my blob a buffer ?
     * ```javascript
     * var myBlob = new Blob();
     * var isBuffer = Buffer.isBuffer( myBlob );
     * console.log( isBuffer );
     * // false
     * ```
     * 
     * #### Example 3: Is my buffer a buffer ?
     * ```javascript
     * var myBuffer = new Buffer( '20' );
     * var isBuffer = Buffer.isBuffer( myBuffer );
     * console.log( isBuffer );
     * // true
     * ```
     * 
     * @param obj Object to evaluate
     * @returns Returns `true` is the object is a buffer, `false` otherwise
     */
    isBuffer(obj: any): Boolean;
}

interface WAKBufferInstance {
    /**
     * Number of bytes of the buffer.
     */
    readonly length: Number;
    /**
     * Copies the current buffer into the target buffer.
     * 
     * ```javascript
     * b1 = new Buffer(26);
     * b2 = new Buffer(26);
     * for (var i = 0 ; i < 26 ; i++) {
     *   b1[i] = i + 65; // 65 is "A" character in UTF8
     *   b2[i] = 42; // 42 is "*"
     * }
     * b1.copy(b2, 6, 8, 22);
     * b2.toString('utf8', 0, 26);
     * ```
     * 
     * @param targetBuffer Defines the buffer where to copy the data
     * @param targetOffset (default: 0) Byte offset where to start writing the data
     * @param sourceOffset (default: 0) Byte offset where to start reading the data
     * @param sourceEnd (default: buffer.length) Byte offset where to end reading the data
     */
    copy(targetBuffer: WAKBufferInstance, targetOffset?: Number, sourceOffset?: Number, sourceEnd?: Number): void;
    /**
     * Fills the Buffer to which it is applied with the character you passed in value.
     */
    fill(value: String, offset?: Number, length?: Number): void;
    /**
     * Creates a new Buffer object by referencing the contents of the bytes array of the Buffer to which it is applied, from start to end.
     */
    slice(start: Number, end?: Number): WAKBufferInstance;
    /**
     * Returns a Blob object containing a copy of the Buffer bytes.
     */
    toBlob(mimeType?: String): WAKBlobInstance;
    /**
     * Converts the buffer contents into a string.
     */
    toString(encoding: String, start?: Number, end?: Number): String;
    /**
     * Writes the string parameter to the Buffer at the offset position and returns the number of bytes written.
     */
    write(string: String, offset?: Number, encoding?: String): Number;
    /**
     * Returns a 64 bit double value read from the Buffer with the Big Endian format.
     */
    readDoubleBE(offset: Number, noAssert?: Boolean): Number;
    /**
     * Returns a 64 bit double value read from the Buffer with the Little Endian format.
     */
    readDoubleLE(offset: Number, noAssert?: Boolean): Number;
    /**
     * Returns a 32-bit float value read from the Buffer with the Big Endian format.
     */
    readFloatBE(offset: Number, noAssert?: Boolean): Number;
    /**
     * Returns a 32-bit float value read from the Buffer with the Little Endian format.
     */
    readFloatLE(offset: Number, noAssert: Boolean): Number;
    /**
     * Returns an unsigned 16-bit integer value read from the Buffer with the Big Endian format.
     */
    readInt16BE(offset: Number, noAssert?: Boolean): Number;
    /**
     * Returns a signed 16-bit integer value read from the Buffer with the Little Endian format.
     */
    readInt16LE(offset: Number, noAssert?: Boolean): Number;
    /**
     * Returns a signed 24-bit integer value read from the Buffer with the Big Endian format.
     */
    readInt24BE(offset: Number, noAssert?: Boolean): Number;
    /**
     * Returns a signed 24-bit integer value read from the Buffer with the Little Endian format.
     */
    readInt24LE(offset: Number, noAssert?: Boolean): Number;
    /**
     * Returns a signed 32-bit integer value read from the Buffer with the Big Endian format.
     */
    readInt32BE(offset: Number, noAssert?: Boolean): Number;
    /**
     * Returns a signed 32-bit integer value read from the Buffer with the Little Endian format.
     */
    readInt32LE(offset: Number, noAssert?: Boolean): Number;
    /**
     * Returns a signed 8-bit integer value read from the Buffer to which it is applied.
     */
    readInt8(offset: Number, noAssert?: Boolean): Number;
    /**
     * Returns an unsigned 16-bit integer value read from the Buffer with the Big Endian format.
     */
    readUInt16BE(offset: Number, noAssert?: Boolean): Number;
    /**
     * Returns an unsigned 16-bit integer value read from the Buffer with the Little Endian format.
     */
    readUInt16LE(offset: Number, noAssert?: Boolean): Number;
    /**
     * Returns an unsigned 24-bit integer value read from the Buffer with the Big Endian format.
     */
    readUInt24BE(offset: Number, noAssert?: Boolean): Number;
    /**
     * Returns an unsigned 24-bit integer value read from the Buffer with the Little Endian format.
     */
    readUInt24LE(offset: Number, noAssert?: Boolean): Number;
    /**
     * Returns an unsigned 32-bit integer value read from the Buffer with the Big Endian format.
     */
    readUInt32BE(offset: Number, noAssert?: Boolean): Number;
    /**
     * Returns an unsigned 32-bit integer value read from the Buffer with the Little Endian format.
     */
    readUInt32LE(offset: Number, noAssert?: Boolean): Number;
    /**
     * Returns an unsigned 8-bit integer value read from the Buffer to which it is applied.
     */
    readUInt8(offset: Number, noAssert?: Boolean): Number;
    /**
     * Writes the 64-bit double value to the Buffer with the Big Endian format.
     */
    writeDoubleBE(value: Number, offset: Number, noAssert?: Boolean): void;
    /**
     * Writes the 64-bit double value to the Buffer with the Little Endian format.
     */
    writeDoubleLE(value: Number, offset: Number, noAssert?: Boolean): void;
    /**
     * Writes the 32-bit float value to the Buffer with the Big Endian format.
     */
    writeFloatBE(value: Number, offset: Number, noAssert?: Boolean): void;
    /**
     * Writes the 32-bit float value to the Buffer with the Little Endian format.
     */
    writeFloatLE(value: Number, offset: Number, noAssert?: Boolean): void;
    /**
     * Writes the 16-bit signed integer value to the Buffer with the Big Endian format.
     */
    writeInt16BE(value: Number, offset: Number, noAssert?: Boolean): void;
    /**
     * Writes the 16-bit signed integer value to the Buffer with the Little Endian format.
     */
    writeInt16LE(value: Number, offset: Number, noAssert?: Boolean): void;
    /**
     * Writes the 24-bit signed integer value to the Buffer with the Big Endian format.
     */
    writeInt24BE(value: Number, offset: Number, noAssert?: Boolean): void;
    /**
     * Writes the 24-bit signed integer value to the Buffer with the Little Endian format.
     */
    writeInt24LE(value: Number, offset: Number, noAssert?: Boolean): void;
    /**
     * Writes the 32-bit signed integer value to the Buffer with the Big Endian format.
     */
    writeInt32BE(value: Number, offset: Number, noAssert?: Boolean): void;
    /**
     * Writes the 32-bit signed integer value to the Buffer with the Little Endian format.
     */
    writeInt32LE(value: Number, offset: Number, noAssert?: Boolean): void;
    /**
     * Writes the 8-bit signed integer value to the Buffer to which it is applied.
     */
    writeInt8(value: Number, offset: Number, noAssert?: Boolean): void;
    /**
     * Writes the 16-bit unsigned integer value to the Buffer with the Big Endian format.
     */
    writeUInt16BE(value: Number, offset: Number, noAssert?: Boolean): void;
    /**
     * Writes the 16-bit unsigned integer value to the Buffer with the Little Endian format.
     */
    writeUInt16LE(value: Number, offset: Number, noAssert?: Boolean): void;
    /**
     * Writes the 24-bit unsigned integer value to the Buffer with the Big Endian format.
     */
    writeUInt24BE(value: Number, offset: Number, noAssert?: Boolean): void;
    /**
     * Writes the 24-bit unsigned integer value to the Buffer with the Little Endian format.
     */
    writeUInt24LE(value: Number, offset: Number, noAssert?: Boolean): void;
    /**
     * Writes the 32-bit unsigned integer value to the Buffer with the Big Endian format.
     */
    writeUInt32BE(value: Number, offset: Number, noAssert?: Boolean): void;
    /**
     * Writes the 32-bit unsigned integer value to the Buffer with the Little Endian format.
     */
    writeUInt32LE(value: Number, offset: Number, noAssert?: Boolean): void;
    /**
     * Writes the 8-bit unsigned integer value to the Buffer to which it is applied.
     */
    writeUInt8(value: Number, offset: Number, noAssert?: Boolean): void;
}


interface WAKConnectionSession {
    /**
     * Describes the session expiration date.
     */
    expiration: Date;
    /**
     * Describes the session internal ID.
     */
    ID: String;
    /**
     * Describes the session lifetime (default: 3600 seconds).
     */
    lifeTime: Number;
    /**
     * Describes the user session storage.
     */
    storage: KeyValueStorage;
    /**
     * Describes the session user.
     */
    user: User;
    /**
     * Check if the session belongs to the group.
     * @param Describes a group name
     * @returns Returns `true` if the user belongs to the group, `false` otherwise.
     */
    belongsTo(group: String): Boolean;
    /**
     * Check if the session belongs to the group.
     * @param Describes a group object
     * @returns Returns `true` if the user belongs to the group, `false` otherwise.
     */
    belongsTo(group: Group): Boolean;
    /**
     * Check if the current session belongs to the group.
     * @returns `true` if the session belongs to the group, throws an error otherwise.
     * @throws An error if the session does not belongs to the group
     */
    checkPermission(group: String): Boolean;
    /**
     * Check if the current session belongs to the group.
     * @returns `true` if the session belongs to the group, throws an error otherwise.
     * @throws An error if the session does not belongs to the group
     */
    checkPermission(group: Group): Boolean;
    /**
     * Expires the user session.
     */
    forceExpire(): void;
    /**
     * Temporarily promotes the current session into the group.
     */
    promoteWith(group: Group): Number;
    /**
     * Temporarily promotes the current session into the group.
     */
    promoteWith(group: String): Number;
    /**
     * Stops the temporary promotion set for the current session using the `promoteWith()` method.
     */
    unPromote(token: Number): void;
}

interface WAKConnectionSessionInfo {
    /**
     * UUID String referencing the user. It can be any ID but must not be an existing user ID.
     */
    ID: String;
    /**
     * Username of the User.
     */
    name: String;
    /**
     * Full Name of the User.
     */
    fullName?: String;
    /**
     * Array of UUID strings or Array of group names referencing the groups the user must belong to.
     */
    belongsTo?: String[];
    /**
     * Defines the session storage property of the user session.
     */
    storage?: KeyValueStorage;
    /**
     * Defines the session time to live in seconds for the user session.
     */
    lifeTime?: Number;
}/**
 * Writes message to the log file and the debugger's console.
 * 
 * ```javascript
 * console.log('Hello World!');
 * // Hello World!
 * console.log("I'm %d years old.", userAge);
 * // I'm 20 years old.
 * console.log('My first car was a', car, '. The object is: ', someObject);
 * // My first car was a Toyota. The object is: { name: 'Toyota' }
 * console.log({ str: 'Some text', id: 5 });
 * // { str: 'Some text', id: 5 }
 * ```
 */
interface WAKConsole {
    /**
     * Get logged messages.
     * 
     * ```javascript
     * var lastLogs = console.content.join('\n');
     * ```
     */
    content: Array<String>;
    /**
     * @param message Message to log. Can use the following substitution strings: %o, %s, %d, %i, %f.
     * @param subst Substitution value
     */
    error(message: String, ...subst: any[]): void;
    error(message: Object): void;
    /**
     * @param message Message to log. Can use the following substitution strings: %o, %s, %d, %i, %f.
     * @param subst Substitution value
     */
    log(message: String, ...subst: any[]): void;
    log(message: Object): void;
    /**
     * @param message Message to log. Can use the following substitution strings: %o, %s, %d, %i, %f.
     * @param subst Substitution value
     */
    warn(message: String, ...subst: any[]): void;
    warn(message: Object): void;
}


/** FRED TEST */
interface Datastore {
    
	/**
	*Collection of available datastore classes
	*/
	dataClasses: DatastoreClassEnumerator;
	/**
	*exports all the entities stored in the object for which it is called in JSON format
	*/
	exportAsJSON(exportFolder: WAKFolderInstance, numFiles: Number, fileLimitSize: Number, attLimitSize?: Number) : void;
	/**
	*exports all the entities stored the object for which it is called in SQL format
	*/
	exportAsSQL(exportFolder: WAKFolderInstance, numFiles: Number, fileLimitSize: Number, attLimitSize?: Number) : void;
	/**
	*flushes the data cache to disk
	*/
	flushCache() : void;
	/**
	*returns the size of memory used by the datastore cache (in bytes)
	*/
	getCacheSize() : Number;
	/**
	*returns a reference, Folder, to the folder containing the datastore data file
	*/
	getDataFolder() : WAKFolderInstance;
	/**
	*allows you to get detailed information about Wakanda database engine events
	*/
	getMeasures(options?: Object) : Object;
	/**
	*returns a reference, Folder, to the folder containing the datastore model file
	*/
	getModelFolder() : WAKFolderInstance;
	/**
	*returns the name of the current datastore
	*/
	getName() : String;
	/**
	*returns a Folder type reference to the datastore "temporary files" folder
	*/
	getTempFolder() : WAKFolderInstance;
	/**
	*imports all the entities stored in JSON format from the file(s) located in the importFolder folder
	*/
	importFromJSON(importFolder: WAKFolderInstance) : void;
	/**
	*looks for any "ghost" tables in the data file of your application and adds the corresponding datastore classes to the loaded model
	*/
	revealGhostTables() : void;
	/**
	*increase dynamically the datastore cache size
	*/
	setCacheSize(newSize: Number) : void;
}



interface DatastoreClass {
/**
	*Collection of available attributes
	*
	* @returns Object containing all the attributes of the DatastoreClass
	* 
	* ```ds.MyDataclass.attributes```
	*/
	attributes: AttributeEnumerator;
	
	
	/**
	*Number of entities in the datastore class
	*  
	* ```javascript
	* ds.MyDataclass.length
	* ```
	*/
	length: Number;
	
	
	/**
	*returns an object of type EntityCollection containing all the entities in the datastore class
	*
	* ```javascript
	* ds.MyDataclass.all()
	* ```
	*/
	all() : EntityCollection;
	
	
	
	
	
	/**
	*returns the arithmetic average of all the non-null values of attribute for the datastore class or entity collection
	* ### For a detailled description of the method, [go here](entitycollection.html#average) 
	*/
	average(attribute: DatastoreClassAttribute, distinct?: Boolean) : Number;
	
	
	
	
	/**
	* Compute performs, in a single call, all the statistical calculations on the attribute or list of attributes passed as the parameter for the datastore class or entity collection
	* @param attribute DatastoreClassAttribute,String Attribute(s) for which you want to perform statistical calculations
	* @param distinct Boolean Compute distinct calculations - `false` by default
	* @returns Object containing the following calculations :
	* 	- average	Arithmetic average
	*	- averageDistinct	Average taking only distinct values into account
	*	- count	Number of values
	*	- countDistinct	Number of distinct values
	*	- max	Maximum value
	*	- min	Minimum value
	*	- sum	Sum
	*	- sumDistinct	Sum taking only distinct values into account
	*
	* @warning If you pass more than one attribute and enable the Distinct calculations, they will be valid only for the first attribute.
	* #### Example 1 - Compute Multi Attributes with Distinct
	*  ```javascript
	*  var calculations = ds.Employee.compute("age, salary", true); //the Distinct operations will be performed only on the `age` attribute
	*  var stats = "Average age ="+ calculations.age.averageDistinct+" Total salary ="+calculations.salary.sum);
	* ```
	*/
	compute(attribute: DatastoreClassAttribute, distinct?: Boolean) : Object;
	/** 
	* Compute performs, in a single call, all the statistical calculations on the attribute or list of attributes passed as the parameter for the datastore class or entity collection
	* @param attribute DatastoreClassAttribute,String Attribute(s) for which you want to perform statistical calculations
	* @param groupBy DatastoreClassAttribute,String Attribute(s) on which you want to have subtotal breaks	
	* @returns Object containing all the calculations performed and subtotals
	* #### Example 1 - Compute with groupBy 
	* ```javascript
	*  var stats = ds.Sales.all().compute("benefit, revenues", "country, month");
    * // compute `benefit`and `revenues` values of a Sales class grouped by country and month
	* // for more convenience the returned object can be converted into an array 
	* stats.toArray();
	* ```
	*/
	compute(attribute: DatastoreClassAttribute, groupBy?: DatastoreClassAttribute) : Object;
	
	
	
	
	
	
/**
	* The Count() method returns the number of entities contained in the entity collection or datastore class
	* @param attribute DatastoreClassAttribute,String Attribute whose value must not be null
	* @param distinct Boolean  Default `false` Use only entities that have different values
	* @returns Number of entities in the collection or Dataclass
	* @warning `distinct` parameter is ignored if you do not pass the `attribute` parameter
	* #### Example 1
	* ```javascript
	* ds.DataClass1.query('name > 1*').count('name2', true)
	* ```
	* #### Example 2 - Count on object attribute
	* ```javascript
	* var vCount = ds.MyClass.all().count("objectAtt.prop") // `objectAtt` is an object attribute with a `prop` property
	* ```
	*/
	count(attribute: DatastoreClassAttribute, distinct?: Boolean) : Number;
	
	
	
	
	
	/**
	*creates a new blank object of type Entity based on the datastore class.
	* 
	* @warning
	* The object is created in memory and is not saved in the datastore until the save( ) method is called. 
	* If the object is deleted before being saved, it cannot be recovered.
	* 
	* #### Example (create then save)
	* ```javascript
	* var newCompany = ds.Company.createEntity() ;
	* a.name = 'Wakanda';
	* a.city = 'Paris' ; 
	* a.save() ;
	* ```
	*  
	* ### Note
	* Another useful alternative way to create entities (then save) is to use the `new` syntax
	* ```javascript
	* new ds.Company({
		name : 'Wakanda' ,
		city : 'Paris'
	}).save();
	* 
	*/
	createEntity() : Entity;
	
	
	
	
	
	
	
	/**
	* creates a new blank object of type EntityCollection attached to the datastore class 
	*
	* @param keepSorted Boulean - `True` to create a SortedCollection (`false` by Default)
	*
	*
	* #### Note
	* For more information about sorted/unsorted collection, [visit this page](http://doc.wakanda.org/Datastore/Entity-Collection/Unsorted-vs-Sorted-Entity-Collections.300-932765.en.html)
	*
	* @warning = **createEntityCollection** do work only with Wakanda built-in DB. It does not work with MySQL / ODBC Connectors*
	* 
	* #### Example 1
	* ```javascript
	* var all = ds.Person.all(); // get all the entities
	* var coll1 = ds.Person.createEntityCollection(); // create an empty unsorted entity collection
	* coll1.add( all[10]); //add some entities, one of them 3 times
	* coll1.add( all[9]);
	* coll1.add( all[8]);
	* coll1.add( all[7]);
	* coll1.add( all[8]);
	* coll1.add( all[8]);
	* coll1; // displays the collection
	* ```
	*/
	createEntityCollection(keepSorted?: Boolean) : EntityCollection;
	
	
	
	
	
	
	/**
	* The distinctValues( ) method creates an array and returns in it all the distinct values stored in attribute for the entity collection or datastore class
	* @param attribute DatastoreClassAttribute 		Attribute for which you want to get the list of distinct values
	* @returns  Array containing the list of distinct values
	* #### Example 1
	* ```javascript
	* //In our example, we want to return the total number of different jobs in the same company:
    *
	* var employer = ds.Company.find( "name == :1", "WAKANDA" ) ;  // find the company by its name
	* var allEmp = ds.Employee.query("comp == :1", employer); // create an entity collection containing all the employees in a company
	* // 'comp' is a relation attribute in Employee
	*  var jobNb = allEmp.distinctValues("jobName").length; //`jobName` is a DatastoreClassAttribute of Employee
    * ``` 
	* #### Example 2 - distinctValues with Object Attributes.
	* ```javascript
	* // In a "keywords" object attribute of an Article datastore class, you store the page numbers for each keyword in a "pages" array. 
	* // You want to know all pages that contain at least one keyword
	*  var arr = ds.Article.all().distinctValues("keywords.pages[]");
	* ``` 
	*/
	distinctValues(attribute: DatastoreClassAttribute): any[];
	
	
	

    /**
	*exports all the entities stored in the object for which it is called in JSON format
	* It can be called for a :
	* 	- datastore 
	*	- DatastoreClass 
	*	- EntityCollection
	* @warning : 
	* - calculated attributes are not exported -- only their underlying attributes are exported,
	* - extended datastore classes are not exported,
	* - related or alias attributes are not exported directly -- only primary keys values are exported,
	* - data from outside catalogs or datastores are not exported	
	* #### Example :
	* ```javascript
	* myFolder = new Folder("C:/ExportCollectionJSON/");     // get a reference to the export folder
	* if (myFolder.exists)     // if the folder actually exists
	* {
    *	var coll=ds.Employee.query("lastName = :1", "P*");   
    *	coll.exportAsJSON( myFolder ) ;     // export the collection
	*	}
	* ```
	*For more details, go here : http://doc.wakanda.org/home2.en.html%23/Datastore/Entity-Collection/length.303-638616.en.html#/Datastore/Entity-Collection/exportAsJSON.301-1041820.en.html
	*
	* @param exportFolder Folder Folder where you want to export the collection.
	* @param numFiles Number Maximum number of files per Folder
	* @param fileLimitSize	Number Size limit vamue of export files (in KB)
	* @param attLimitSize Number Size limit (in bytes) velow which the contents of a BLOB or Picture attribute are embedded into the main file
	*  
	*/
	exportAsJSON(exportFolder: WAKFolderInstance, numFiles?: Number, fileLimitSize?: Number, attLimitSize?: Number) : void;
	
	
	
	
	
/**
	*exports all the entities stored the object for which it is called in SQL format
	* It can be called for a :
	* 	- datastore 
	*	- DatastoreClass 
	*	- EntityCollection
	* @warning : 
	* - calculated attributes are not exported -- only their underlying attributes are exported,
	* - extended datastore classes are not exported,
	* - related or alias attributes are not exported directly -- only primary keys values are exported,
	* - data from outside catalogs or datastores are not exported	
	* #### Example 
	* ```javascript
	* 	myFolder = new Folder("C:/ExportCollection/");     // get a reference to the export folder
	*	if (myFolder.exists)     // if the folder actually exists
	*	{
    *	var coll=ds.Employee.query("lastName = :1", "P*");   
    *	coll.exportAsSQL( myFolder ) ;     // export the collection
	* ```
	* For more details go here : http://doc.wakanda.org/home2.en.html%23/Datastore/Entity-Collection/length.303-638616.en.html#/Datastore/Entity-Collection/exportAsSQL.301-1041494.en.html
	*
	* @param exportFolder Folder Folder where you want to export the collection.
	* @param numFiles Number Maximum number of files per Folder
	* @param fileLimitSize	Number Size limit vamue of export files (in KB)
	* @param attLimitSize Number Size limit (in bytes) velow which the contents of a BLOB or Picture attribute are embedded into the main file
	*/
	exportAsSQL(exportFolder: WAKFolderInstance, numFiles?: Number, fileLimitSize?: Number, attLimitSize?: Number) : void;
	
	
	
	
	
	
	
	
	
/**
	* Search operation in a the DatastoreClass or EntityCollection that returns `the first entity` found in an object of type `Entity`
	* ## Important :
	* ``
	* The find( ) method is equivalent to executing a query( ) followed by retrieving the first entity:
	* For more details and exemples check the Query method section
	* ``
	* #### Example1 : With QueryString syntax
	* ```javascript
	* ds.Employee.find( "name == DOE");
	* ```
	* #### Example2 :  With placeholders syntax
	* ```javascript
	* ds.Employee.find( 'name ==:1', "DOE");
	* ```
	* @param queryString 
	* @param valueList  Value(s) to compare when using placeholders
	* @param options 
	* @returns The first found entity in the collection
	* 
	*  
	*/
	find(queryString: String, valueList: any[], options : Object) : Entity;
	
	
	
	
	/**
	* Returns the entity in the first position of the entity collection or datastore class
	* #### Example
	* ```javascript
	* ds.Employee.query('ID > 2').first()  //exemple1
	* ds.Company.first()  //exemple2
	* ```
	*/
	first() : Entity;
	
	



/**
	* Executes the callbackFn function on each entity in the entity collection(or Dataclass) in ascending order
	* @param callbackFn Function Handler function to invoke for each entity in the collection
	* ``
	* The callbackFn function accepts two parameters: function (`thisArg`, `iterator`)
	* -  The first parameter, `thisArg`, represents the entity currently being processed. When it is executed, the function receives in this parameter the entity on which it iterates (the parameter is used like the keyword `this`). You can then perform any type of operation on the values of the entity.
	* - The second (optional) parameter, `iterator`, is the iterator. When it is executed, the function receives in this parameter the position of the element currently being processed in the entity collection. You can use it, for example, to display a counter.
	* ``
	* @warning The forEach( ) method includes an optimized mechanism that triggers the entity to be saved automatically if it has been modified, and not saved when it hasn't.
	* You can however call the save( ) method anyway to manage any errors in a try/catch structure.  (In this case the call is detected by Wakanda and the entity is not saved a second time)
	* #### Example 
	* ```javascript
	*  // We want to give a 5% raise to all employees with a salary less than 5,000.
	* mySet = ds.Employee.query('salary < 5000') ;
	* mySet.forEach(
    * function( emp ) {
	* emp.salary *= 1.05;
	* // unnecessary to save modification forEach does it automatically when needed
    * });
	* ```
	*/
	forEach(callbackFn: Function) : void;
	
	
	
	
	
	
	/**
	*generates entities in the datastore class where it is applied and returns the resulting entity collection
	* @param Array whose values are used to generate entities
	* @returns New entity collection
	* 
	* @warning :
	* - The entities passed in the `arrayValues` are **generated and saved** when executing fromArray()
	* - Wakanda automatically adds the **ID number** to the entity created 
	* - You can modify an existing entity by adding the __KEY  and STAMP attributes and their respective values in arrayValues 
	*
	* #### Example
	* ```javascript
	* var arrAdd = []     // Create an empty array
	* arrAdd[0] = {lastName: "Potter", firstName: "Harold", salary: 3200};
	* arrAdd[1] = {lastName: "Luke", firstName: "Lucy", salary: 5300, married: true}; // 'married' is ignored if the attribute does not exist in the datastore class
	* arrAdd[2] = {lastName: "Blue", firstName: "George", salary: 3200};
	* var newColl = ds.Employees.fromArray(arrAdd);     // entities are created and saved
	* newColl; 
	* ```
	*/
	fromArray(arrayValues: any[]) : EntityCollection;
	
	
	
	
	
	
	
	
	/**
	*returns the percentage of logical fragmentation for the entities of the datastore class
	* 
	* Tip : Beyond a rate of 20% (0.2), it may be useful to [compact the datastore data] (http://doc.wakanda.org/Datastore/Datastore-Maintenance-Methods/compactDataStore.301-595628.en.html)  
	*
	* #### Note :
	* Works only with Wakanda Built-in DB. (i.e. do not concern MySQL / ODBC / Custom catalog)
	* 
	*/
	getFragmentation() : Number;
	
	
	
	
	/**
	*returns the name of the datastore class to which it is applied in a string
	* ```javascript
	* var nameEM = ds.Book.getName();
	* ```
	*/
	getName() : String;
	
	
	
	
	/**
	*returns the current scope property value of the datastore class
	* Two values can be returned for a datastore class: (default value `public`)
	*	- "public": a public datastore class can be accessed from anywhere (including on the client side)
	*   - "public on server": a public on server datastore class can only be accessed on the server
	* 
	* You can get more information about the [Datastore Class Properties here](http://doc.wakanda.org/Datastore-Model-Designer/Datastore-Classes.300-305138.en.html#664408)
	*/
	getScope() : String;
	
	
	
	
	
	/**
	*imports all the entities stored in JSON format from the file(s) located in the importFolder folder
	* 
	* The importFromJSON( ) method can be called for a:
	*	- Datastore: entities from all the datastore classes are imported,
	*	- DatastoreClass: entities from the datastore class are imported.
	*
	* #### Note
	* This method only work with the Wakanda Built-in database (MYSQL and other Connectors are not concerned)
	*
	*
	* @warning :
	* ````text
	*	- This folder must contain UTF-8 text files into which each entity is described through a single JSON object
	*	- calculated attributes cannot be imported directly -- only their underlying attributes are imported,
	*	- extended datastore class entities cannot be imported,
	*	- related or alias attributes are not imported directly -- only primary keys values are exported,
	*	- you cannot import data from outside catalogs or datastores. 
	*
	*  You can refer to the [exportAsJson method description] (entitycollection.html#exportasjson) for more information about exporting/importing
	* ```
	*/
	importFromJSON(importFolder: WAKFolderInstance) : void;
	
	
	
	/**
	* Returns the maximum value among all the values of attribute in the entity collection or datastore class
	* @param attribute DatastoreClassAttribute Attribute for which you want to get the highest value.
	* @returns Number Highest value of attribute
	* #### Example 1  
	* ```javascript
	* //We want to find the highest salary among all the female employees:
	* var fColl = ds.Employee.query("gender == :1","female");
	* var maxFSalary = fColl.max("salary");
	* ```
	* #### Example 2 - Max with object attributes
	* 
	* ```javascript
	* var value = ds.MyClass.all().max("objectAtt.prop") //Highest of all prop attribute values
	* ```
	*/
	max(attribute: DatastoreClassAttribute) : Number;

	
	
	
	
	/**
	*returns the lowest (or minimum) value among all the values of attribute in the entity collection or datastore class
	* @param attribute DatastoreClassAttribute Attribute for which you want to get the lowest value.
	* @returns Number Lowest value of attribute
	* #### Example 1  
	* ```javascript
	* //We want to find the lowest salary among all the female employees:
	* var fColl = ds.Employee.query("gender == :1","female");
	* var maxFSalary = fColl.min("salary");
	* ```
	* #### Example 2 - Min with object attributes
	* 
	* ```javascript
	* var value = ds.MyClass.all().min("objectAtt.prop") //Lowest of all prop attribute values
	* ```
	*/
	min(attribute: DatastoreClassAttribute) : Number;
	
	
	
	
	/**
	* The orderBy method sorts the entities in the entity collection or datastore class and returns a new sorted entity collection
	* @param attributeList DatastoreClassAttribute Attribute(s) to be sorted and (if String) order by direction(s)
	* @param sortOrder string `asc` (by `default`) for ascending sort / `desc` for descending.
	* @info You can pass from 1 to x attributes separated by commas
	* #### Example1 orderBy with Mutliple Attributes
	* ```javascript
	*  // This example performs a simple search and returns an entity collection that has been sorted on two attributes, the first in descending order
	*  var mySet = ds.People.query("salary > 10000");
    *  var mySet2 = mySet.orderBy("salary desc,city");
	* ```
	* #### Example2 orberBy with a relation attribute 
	* ```javascript
	* // This example sorts employees with a salary greater than 10,000 by the city where their company is located, using a relation attribute
	* var mySet = ds.People.query("salary > 10000");
	* mySet = mySet.orderBy(ds.People.employer.city); // `employer` is a relation attribute
	* ```
	* #### Example3 orberBy with object attributes
	* ```javascript
	* ds.MyClass.all().orderBy("objectAtt.prop desc")
	* ```
	*/
	orderBy(attributeList: DatastoreClassAttribute, sortOrder?: String) : EntityCollection;
	
	
	
	
	
	
	/**
	*searches all the entities in the datastore class or entity collection using the search criteria specified in queryString and returns a new collection containing the entities found
	*  #### Descrption
	* The Query method description is fully described [here (entity collection part)] (entitycollection.html#query)
	*/
	query(queryString: String, ...valueList: any[]) : EntityCollection;
	
	
	
	
	
	
	
	/**
	* Permanently removes entities from the datastore
	* - When you apply it to an entity collection, it removes the entities belonging to that entity collection,
    * - When you apply it to a datastore class, it removes all the entities in the datastore class.
	*
	* #### Examples
	* ```javascript
	* // Applied to a Dataclass 
	* ds.Dataclass1.remove();
	* ```
	* ```javascript
	* // Applied to a collection
	*  ds.Dataclass1.query('ID > 3 & ID < 5').remove();
	* ```
	* ```javascript
	* // Applied to an entity
	* ds.Dataclass1.first().remove();
	* ```
	* ```javascript
	* // Applied at the Model level (Entity method on the Customer dataclass)
	* model.Customer.entityMethods.remove = function() {
    * this.remove();
	* };
	* ```
	* 
	*/
	remove() : void;
	
	
	
	
	
	
	
	/**
	*(re)sets the start value for the autosequence number of the datastore class
	* @param counter New start value for entity counter
	* This method (re)sets the start value for the autosequence number of the datastore class. 
	* 
	* note : the ID is based on this internal counter. An autosequence number can be set for any attribute on [Model Designer] (http://doc.wakanda.org/Datastore-Model-Designer/Datastore-Model-Designer.100-1051416.en.html)
	*/
	setAutoSequenceNumber(counter: Number) : void;
	
	
	
	
	
	
	
/**
	*returns the sum (i.e., total of all the values) of attribute for the datastore class or entity collection
	* @param DatastoreClassAttribute Attr
	ibute whose sum you want to calculate
	* @param distinct  `false` by Default Use only entities that have different values
	* #### Example 1
	* ```javascript
	*  var highSalaries = ds.Employees.query("salary > 30000").sum("salary" , true);
	* ```
	* #### Example2 With Object attributes
	* ```javascript
	* var propSum = ds.MyClass.all().sum("objectAtt.prop") //sum of all prop attribute values
	* ```
	*/
	sum(attribute: DatastoreClassAttribute, distinct?: Boolean) : Number;
	
	
	
	
	
	
	/**
	* The toArray() method creates and returns a JavaScript array where each element is an object containing a set of properties and values corresponding to the attribute names and values for a datastore class or an entity collection
	* @param attributeList DatastoreClassAttribute List of attributes to return as array or "" to return all attributes
	* @param sortList string list of attributes used for the sort
	* @param key boolean Include the entity key and stamp `false` by default
	* @param skip number Position of starting entity to return
	* @param top number Number of entities to return
	* @returns Array containing attributes and values of datastore class or entity collection
	* 
	* #### Note
	* You can of course navigate through dataclasses via relation attributes.
	* In this scenario you can even limit the number of related entities fetched by passing `RelatedAttribure: N` (where N represents the number of sub elements)
	* #### EXAMPLES 
	*  <details> <summary> Click to Expand </summary>
	*  ### Simple case
	* ```javascript
	* var myArray = ds.Employee.toArray("firstName,lastName,salary");
	* // myArray[0] contains {firstName: 'John', lastName: 'Smith', salary: 5000} 
	* ```
	*  ### To get all the attributes from a collection
	* ```javascript
	*  var myColl = ds.Employee.query("salary >= 6000 order by salary asc");
	*  var myArray = myColl.toArray("");     // return all attributes
	* ```
	* ### Example with relations and options (key, skip , top)
	* ```javascript
	*  var myArray = ds.Employee.toArray("name, employer.name, employer.location", true, 0 , 1)  // employer is a relation attribute related to another dataclass
	* // myArray[0] contains { __KEY: '0', __STAMP: 2,name: 'Smith', employer: {name: 'ACME', location: 'Memphis'}}
	*  ```
	* ### Example with Sort, and Sub filtered Relations (three levels)
	* ```javascript
	* 
	* // - Retrieve the first five students.
	* // - Limit the number of courses per student to five.
	* // - Sort arrays by the student's first name and sort course sub-arrays by subject name. Both in ascending order.
	* // - skip the 1st result 
	*  var sel = ds.Student.all();
	*  var myArray = sel.toArray("fullName, Course:5, Course.matter, Course.teacher.fullName", "firstName, Course.matter", 1, 5);
	* ```
	* 
	*/
	toArray(attributeList: DatastoreClassAttribute, sortList?: String, key?: Boolean, skip?: Number, top?: Number): any[];
	
	
	
	
	
	
	/**
	*returns a string representation of the entity or entity collection
	* #### Example 
	* ```
	* ds.Dataclass1.query('ID > 3').toString()  // applied to a collection 
	* ds.Dataclass1.first().toString() // applied to an entity
	* ```
	*/
	toString() : String;
}

interface AttributeEnumerator{
	
}

interface AttributeEnumerator {
    [attributeName: string]: DatastoreClassAttribute;
}

interface DatastoreClassEnumerator {
    [dataClassName: string]: DatastoreClass;
}


interface Entity {
/**
	* Returns the datastore class (object of the DatastoreClass type) of the entity. 
	*
	* #### For more information go [here](entitycollection.html#getdataclass)
	*/
	getDataClass() : DatastoreClass;
	
	
	
	
	
	/**
	*returns the timestamp of the last save of the entity to which it is applied
	* @returns  Date object in local format
	*/
	getTimeStamp() : Date;
	
	
	
	
	/**
	* returns True or False depending on whether the entity iterator points to an entity that is currently loaded in memory
	*/
	isLoaded() : Boolean;
	
	
	
	/**
	* returns True or False depending on whether the entity to which it is applied has been modified since the last time it was loaded from the datastore.
	* #### Note
	* You can use this method to find out if you need to save the entity.
	* This method always returns True for a new entity.
	*
	* #### Example
	* ```javascript
	* emp = ds.Employee.first();
    *    //... process the data in the entity
	* if (emp.isModified())     // if at least one of the attributes has been changed
    * emp.save(); 
    * // otherwise, no need to save the entity
	* ```
	*/
	isModified() : Boolean;
	
	
	
	
	/**
	*returns True or False depending on whether the entity to which it is applied has just been created in the datastore (and not saved yet)
	*/
	isNew() : Boolean;



	/**
	*puts the entity pointer on the next entity within an iteration of entities
	*
	* #### Example with a `for` loop
	* ```javascript
	*  var myColl = ds.People.query("nationality = :1", "FR");
    * for (var onePerson = myColl.first(); onePerson != null; onePerson=onePerson.next())
    * // onePerson will return null after the last entity of the collection
	* {
    * onePerson.name = onePerson.name.toUpperCase();
    * onePerson.save();
	* }
	* ```
	* #### Same Example with `while`
	* ```javascript
	* var myColl = ds.People.query("nationality = :1", "FR");
	* var onePerson = myColl.first(); 
	* while (onePerson != null)
    * {
    *    onePerson.name = onePerson.name.toUpperCase();
    *    onePerson.save();
    *    onePerson=onePerson.next();
    * }
	*/
	next() : Entity;
	
	
	
	
	/**
	*reloads the entity as it is stored in the datastore
	* @warning 
	* If values are modified and not saved, they are lost.
	*  #### Note : This method is useful :
	* - when you attempt to save an entity but receive an error because this entity was modified in the meantime by another user
	* - when adding new related entities (see below):
	* ```javascript
	* 
	* 
	* locationsColl_Before = company.locations; //3 locations
	* //Then you create a new location related to the company.  You might expect calling this again:
	* locationsColl_After = company.locations; //3 locations
	* //It will not, it will still return the original 3.  In order to get all 4 locations related to the company you need to refresh:
	* company.refresh();  locationsColl_AfterRefresh = company.locations; //4 locations
	* ```
	*/
	refresh() : void;
	
	
	
	
	
	/**
	*releases the entity from memory
	*
	* <details> <summary>**Note** : How to use this method (advanced) : </summary>
	* ***
	* ````text
	* Once unloaded by this method, the entity is not unusable. 
	* Wakanda keeps a reference to the entity and automatically reloads it as soon as it becomes used again.
	* This utility method lets you optimize memory consumption when the server needs to load and work with numerous large objects, such as pictures or BLOBs. 
	* 
	* In principle, the garbage collection mechanism of JavaScript will purge unused objects from memory. However, this mechanism operates * * autonomously and can prove to be insufficient in some cases. For example, when the server has loaded dozens of large pictures on the JavaScript side, only references are handled, which may not require the intervention of the garbage collector. 
	* 
	* However, on the server side, the memory is in high demand. In a case like this, it is useful to be able to "force" entities to be unloaded using the release( ) method.
	* 
	* Note that after calling release( ), if you want to make sure that the JavaScript reference to an entity has been deleted without having to wait for garbage collection (and thus for a subsequent access to the entity to return an error), you must force its value to null.
	* ````
	* 
	* #### Example :
	* ```javascript
	* myEntity.release();   //unload the entity from the server
	* myEntity = null;     // delete its reference
	* ```
	*/
	release() : void;
	
	
	
	
	
	
	/**
	*removes the entity from the datastore
	*
	* #### Note:
	* When this method is executed, it triggers a call to the remove event on the server if it has been set for the entity's datastore class or one of the datastore class attributes.
	* 
	* For more information and examples about the remove() method, check its description [here (collection section)](entitycollection.html#remove)
	*/
	remove() : void;
	
	
	
	
	
	
	/**
	* Saves the changes made to the entity in the datastore
	* 
	* 
	* **How to update an existing entity :**
	* ```javascript 
	* var a = ds.Employee.first();
	* a.firstname = "MyNewFirstName" ;
	* a.lastname =  "MyNewLastName" ;
	* a.save();
	* ```
	* **How to create then save an entity:**
	* ```javascript
	* new ds.Employee(
*{
*	firstname : "MyNewFirstName" ,
*	lastname  : "MyNewLastName"
*}).save();
	* ```
	* 
	* </p> 
	* ***
	* 
	* #### Events
	* 
	* When executing a save() action, on the server side the events (if defined) are performed in the following order :
	* 1. validate on each attribute
	* 2. validate on the datastore class
	* 3. save on the datastore class
	* 4. save on each attribute
	*
	* #### Example 
	*
	* ```javascript
	* //You can intercept and manage the error returned by the engine when the entity's internal stamp being saved is different from the one that is saved in the data
	* //To do this, you can place the save statement in a try/catch type structure. For example:
	* // select an entity and change its name to uppercase
	* function toUpperEmployee(lastName, firstName) 
	* {
    	* var emp = ds.Employee.find("lastName = :1 and firstName = :2", lastName, firstName);
    	* emp.lastName.toUppercase();
    	* try
    	* {
    	*    emp.save();
    	* }
    	* catch(e)
       	* {  ... // put the error-processing code here
* }
	* ```
	*/
	save() : void;
	
	
	
	
	/**
	*returns a string representation of the entity or entity collection
	* Examples are available [here](entitycollection.html#tostring)
	*/
	toString() : String;



	/**
	 * The getKey( ) method returns the primary key value of the entity to which it is applied.
	 * ```javascript
	 * 	var ent = ds.Person.find("name = :1", "Smith");
	 *	var key = ent.getKey();
	 * ```
	 * This method is useful to identify the entity to update for instance.  
	 * The KEY value is also needed when you pass a POST request
	 * 
	 * 
	 * 
	 */
	getKey() : String;


	/**
	 * The getStamp( ) method returns the current value of the internal stamp of the entity.
	 * The internal locking stamp is automatically incremented by Wakanda each time the entity is saved on the server. 
	 * **It manages concurrent user access**
	 * 
	 * #### Note 
	 * The entity's STAMP value is needed when executing POST request throught XRH to update an entity
	 * 
	 */
	getStamp() : Number;






	/**
	 * The lock( ) method tries to lock the entity for the session and returns true if the entity is locked successfully, or false if the entity is already locked by another session.
	 * @returns True if the entity is locked for the session, false otherwise
	 * 
	 * @warning The lock()/unlock() method only works with WakandaDB and 4D Mobile Connector. It does not work when working with the **MYSQL & OBDC Connectors**
	 *  
	 * For more details about locking entities check this pages :
	 *  - [lock() API Description](http://doc.wakanda.org/Datastore/Entity/lock.301-1074685.en.html)
	 *  - [In-Depth description of locking mecanism](http://doc.wakanda.org/Datastore/Entity/Locking-Entities.300-606099.en.html)
	 * 
	 */
	lock() : Boolean;




	/**
	 * The unlock() method unlocks the entity in the running session.
	 * This method must be called after the lock( ) method to unlock the entity for the other sessions.
	 * 
	 * @warning The lock()/unlock() method only works with WakandaDB and 4D Mobile Connector. It does not work when working with the **MYSQL & OBDC Connectors**
	 *  
	 * For more details about locking entities check this pages :
	 *  - [unlock() API Description](http://doc.wakanda.org/Datastore/Entity/unlock.301-1074691.en.html)
	 *  - [In-Depth description of locking mecanism](http://doc.wakanda.org/Datastore/Entity/Locking-Entities.300-606099.en.html)
	 * 
	 */
	unlock() : void;



	/**
	 * The getModifiedAttributes( ) method returns an array containing the names of attributes that have been modified in the entity.
	 * This method is useful in validation control functions.(validate events for instance or methods, functions..)
	 * @returns Array of attributes 
	 * 
	 * #### Example in a Dataclass Validate Event 
	 * ```javascript
	 * model.Invoice.events.validate = function(event) {
	 *           //get the array of attributes that were changed
     *   var attributeMods = this.getModifiedAttributes();
     *      //cycle through them
     *   attributeMods.forEach(function(attribName){
     *       switch (attribName){ 
     *          case 'ID': //if the ID was changed
     *          case 'InvoiceDate': //or the invoiceDate was changed
     *                   //assign an error number and message
     *               result = {error: 1000, errorMessage: 'Invalid Change !'};
     *               break;
     *       }
     *   });
     *   return result; //return result regardless
     * }
	 * ```
	 *  
	 * 
	 * ```javascript
	 *  //Then each time you perform a save action the entity will go through this validation process
	 *  var a = ds.Invoice.first();
	 *  a.ID = 12;
	 *  a.save();
	 *  // Running this will thow the error message 'Invalid Change !
	 * ```
	 */
	getModifiedAttributes() : Array;







	/**
	 * The validate( ) method passes the entity through the validation process.
	 * Precisely it means  that on the server, the code associated with the **validate (attribute) and validate (datastore class) event(s)** is executed.
	 * @returns True in case of success (the entity successfully passes the validation process)
	 * @warning Keep in mind that the entity is not saved until you actually call the save( ) method.  
	 *
	 * 
	 * </br> </p>
	 * <details> 
	 * <summary> 
	 * 
	 *  #### Validation  Example (click to Expand) 
	 * </summary>
	 * ```javascript
	 * // first let's create a dataclass validate event
	 * model.Elem.events.validate = function(event) //onValidate until Wakanda v8
    *{
    *if (this.name == "Unknown") {
    *    return {
    *        error: 100, // an object with 'error' will make validation fail
    *        errorMessage: "The name cannot be 'Unknown'"
    *    };
   * }
*} ```
	 * Then you could create a datastore class method
	 * ```javascript
	 * checkValidity:function()
    {
    try {
            return this.validate(); // returns true if successful
    }
    catch (e) {
        throw { // if fail
                // send an exception with the customized message
                // from the error stack
            message: e.messages[e.messages.length - 1] 
             
        };
    }
} 
	 * //Finally you would simply call your Validation process by calling 
	 *  // - the validate() method (server side) or , 
	 * //  - the CheckValidity class method (server side or client side)
	* ```
	*/
	validate() : Boolean;
}


interface EntityCollection {
	/**
	*Number of entities in the entity collection.
	*
	* `
	*var myCount = ds.Dataclass.length ;
	*`
	*/
	length: Number;
	/**
	*Description of the query as it was actually performed
	* ```javascript
	*var mySet = ds.Employee.query("salary > :1  and employer.name = :2", 2000, "ACME", {queryPath: true})
	*var thePath = mySet.queryPath 
	* ```
	* @param `true`
	* @returns An object describing how the query is performed
	*/
	queryPath: String;
   /**
	*Description of the query just before it is executed
	*
	*```javascript
	*var mySet = ds.Employee.query("salary > :1  and employer.name = :2", 2000, "ACME", {queryPlan: true})
	*var thePath = mySet.queryPlan 
	* ```
	*
	* @param `true` 
	* @returns object containing the detailed description of the query just before it was executed (i.e., the planned query).
	*/
	queryPlan: String;
   /**
	* Adds entity collection passed in the toAdd parameter to the entity collection
	* ```javascript 
	* var myColl = ds.Employee.createEntityCollection(); //Create an empty collection
    * myColl.add(ds.Employee.first()); //Add the first datastore class entity
	* var myQuery = ds.Employee.query("lastName == :1","H*"); //Find some employees
 	* if(myQuery != null) //some entities were found
    * myColl.add(myQuery); //Add the collection itself
	* ```
	* @warning By default, if the atTheEnd parameter is omitted or False, the original type of the entity collection is left unchanged. 
	* @param atTheEnd `true` to add the collection at the end of the current collection, `false` for AnyWhere
	*/
	add(toAdd: EntityCollection, atTheEnd?: Boolean) : void;
   /**
	* Adds the entity passed in the toAdd parameter to the entity collection
	* ```javascript 
	* var myColl = ds.Employee.createEntityCollection(); //Create an empty collection
    * myColl.add(ds.Employee.first()); //Add the first datastore class entity
	* var entity = ds.Employee.find("lastName == :1","H*"); //Find an employee
 	* if(entity != null) //An entity was found
    * myColl.add(entity); //Add the entity 
	* ```
	* @warning By default, if the atTheEnd parameter is omitted or False, the original type of the entity collection is left unchanged. 
	* @param atTheEnd `true` to add the collection at the end of the current collection, `false` for AnyWhere
	*/
	add(toAdd: Entity, atTheEnd?: Boolean) : void;


	/**
	* The and( ) method compares the entity collection to which it is applied and the collection2 and returns a new entity collection that contains only the entities that are referenced in both collections.
    * You can compare sorted and/or unsorted entity collections. 
	* The resulting collection is always unsorted.
	* @param collection2 Collection to compare with
	* @returns Resulting (unsorted) entity collection
	* ```javascript
	* var coll1 = ds.Employee.query("name =:1", "Jones") ;
	* var coll2 = ds.Employee.query("city=:1", "New York") ;
	* var coll3 = coll1.and(coll2);
	* ```
	*/
	and(collection2: EntityCollection) : EntityCollection;
	/**
	* The average method returns the arithmetic average of all the non-null values of attribute for the datastore class or entity collection
	* @param attribute `string` Attribute whose average you want to calculate
	* @param distinct `boolean` Use only entities that have different values
	* @returns Number Arithmetic average of attribute values
	* @warning By default `distinct` : false
	* #### Example 1
	* ``` javascript
	* var averageSalary = ds.Employee.average("salary", true);
	* var mySet = ds.Employee.query( "salary > :1", averageSalary);
	* ```
	* #### Example 2 - With Object Attribute `dimensions`
	* ```javascript
	* var coll = ds.Box.query("dimensions.bLength > :1", 200);
	* var vAvg = coll.average("dimensions.bWidth");
	* ```
	*/
	average(attribute: DatastoreClassAttribute, distinct?: Boolean) : Number;
	
	
	/**
	* Compute performs, in a single call, all the statistical calculations on the attribute or list of attributes passed as the parameter for the datastore class or entity collection
	* @param attribute DatastoreClassAttribute,String Attribute(s) for which you want to perform statistical calculations
	* @param distinct Boolean Compute distinct calculations - `false` by default
	* @returns Object containing the following calculations :
	* 	- average	Arithmetic average
	*	- averageDistinct	Average taking only distinct values into account
	*	- count	Number of values
	*	- countDistinct	Number of distinct values
	*	- max	Maximum value
	*	- min	Minimum value
	*	- sum	Sum
	*	- sumDistinct	Sum taking only distinct values into account
	*
	* @warning If you pass more than one attribute and enable the Distinct calculations, they will be valid only for the first attribute.
	* #### Example 1 - Compute Multi Attributes with Distinct
	*  ```javascript
	*  var calculations = ds.Employee.compute("age, salary", true); //the Distinct operations will be performed only on the `age` attribute
	*  var stats = "Average age ="+ calculations.age.averageDistinct+" Total salary ="+calculations.salary.sum);
	* ```
	*/
	compute(attribute: DatastoreClassAttribute, distinct?: Boolean) : Object;
	/** 
	* Compute performs, in a single call, all the statistical calculations on the attribute or list of attributes passed as the parameter for the datastore class or entity collection
	* @param attribute DatastoreClassAttribute,String Attribute(s) for which you want to perform statistical calculations
	* @param groupBy DatastoreClassAttribute,String Attribute(s) on which you want to have subtotal breaks	
	* @returns Object containing all the calculations performed and subtotals
	* #### Example 1 - Compute with groupBy 
	* ```javascript
	*  var stats = ds.Sales.all().compute("benefit, revenues", "country, month");
    * // compute `benefit`and `revenues` values of a Sales class grouped by country and month
	* // for more convenience the returned object can be converted into an array 
	* stats.toArray();
	* ```
	*/
	compute(attribute: DatastoreClassAttribute, groupBy?: DatastoreClassAttribute) : Object;
     

	/**
	* The Count() method returns the number of entities contained in the entity collection or datastore class
	* @param attribute DatastoreClassAttribute,String Attribute whose value must not be null
	* @param distinct Boolean  Default `false` Use only entities that have different values
	* @returns Number of entities in the collection or Dataclass
	* @warning `distinct` parameter is ignored if you do not pass the `attribute` parameter
	* #### Example 1
	* ```javascript
	* ds.DataClass1.query('name > 1*').count('name2', true)
	* ```
	* #### Example 2 - Count on object attribute
	* ```javascript
	* var vCount = ds.MyClass.all().count("objectAtt.prop") // `objectAtt` is an object attribute with a `prop` property
	* ```
	*/
	count(attribute: DatastoreClassAttribute, distinct?: Boolean) : Number;
	
	
	/**
	* The distinctValues( ) method creates an array and returns in it all the distinct values stored in attribute for the entity collection or datastore class
	* @param attribute DatastoreClassAttribute 		Attribute for which you want to get the list of distinct values
	* @returns  Array containing the list of distinct values
	* #### Example 1
	* ```javascript
	* //In our example, we want to return the total number of different jobs in the same company:
    *
	* var employer = ds.Company.find( "name == :1", "WAKANDA" ) ;  // find the company by its name
	* var allEmp = ds.Employee.query("comp == :1", employer); // create an entity collection containing all the employees in a company
	* // 'comp' is a relation attribute in Employee
	*  var jobNb = allEmp.distinctValues("jobName").length; //`jobName` is a DatastoreClassAttribute of Employee
    * ``` 
	* #### Example 2 - distinctValues with Object Attributes.
	* ```javascript
	* // In a "keywords" object attribute of an Article datastore class, you store the page numbers for each keyword in a "pages" array. 
	* // You want to know all pages that contain at least one keyword
	*  var arr = ds.Article.all().distinctValues("keywords.pages[]");
	* ``` 
	*/
	distinctValues(attribute: DatastoreClassAttribute): any[];


	/**
	*exports all the entities stored in the object for which it is called in JSON format
	* It can be called for a :
	* 	- datastore 
	*	- DatastoreClass 
	*	- EntityCollection
	* @warning : 
	* - calculated attributes are not exported -- only their underlying attributes are exported,
	* - extended datastore classes are not exported,
	* - related or alias attributes are not exported directly -- only primary keys values are exported,
	* - data from outside catalogs or datastores are not exported	
	* #### Example :
	* ```javascript
	* myFolder = new Folder("C:/ExportCollectionJSON/");     // get a reference to the export folder
	* if (myFolder.exists)     // if the folder actually exists
	* {
    *	var coll=ds.Employee.query("lastName = :1", "P*");   
    *	coll.exportAsJSON( myFolder ) ;     // export the collection
	*	}
	* ```
	*For more details, go here : http://doc.wakanda.org/home2.en.html%23/Datastore/Entity-Collection/length.303-638616.en.html#/Datastore/Entity-Collection/exportAsJSON.301-1041820.en.html
	*
	* @param exportFolder Folder Folder where you want to export the collection.
	* @param numFiles Number Maximum number of files per Folder
	* @param fileLimitSize	Number Size limit vamue of export files (in KB)
	* @param attLimitSize Number Size limit (in bytes) velow which the contents of a BLOB or Picture attribute are embedded into the main file
	*  
	*/
	exportAsJSON(exportFolder: WAKFolderInstance, numFiles?: Number, fileLimitSize?: Number, attLimitSize?: Number) : void;
	
	
	/**
	*exports all the entities stored the object for which it is called in SQL format
	* It can be called for a :
	* 	- datastore 
	*	- DatastoreClass 
	*	- EntityCollection
	* @warning : 
	* - calculated attributes are not exported -- only their underlying attributes are exported,
	* - extended datastore classes are not exported,
	* - related or alias attributes are not exported directly -- only primary keys values are exported,
	* - data from outside catalogs or datastores are not exported	
	* #### Example 
	* ```javascript
	* 	myFolder = new Folder("C:/ExportCollection/");     // get a reference to the export folder
	*	if (myFolder.exists)     // if the folder actually exists
	*	{
    *	var coll=ds.Employee.query("lastName = :1", "P*");   
    *	coll.exportAsSQL( myFolder ) ;     // export the collection
	* ```
	* For more details go here : http://doc.wakanda.org/home2.en.html%23/Datastore/Entity-Collection/length.303-638616.en.html#/Datastore/Entity-Collection/exportAsSQL.301-1041494.en.html
	*
	* @param exportFolder Folder Folder where you want to export the collection.
	* @param numFiles Number Maximum number of files per Folder
	* @param fileLimitSize	Number Size limit vamue of export files (in KB)
	* @param attLimitSize Number Size limit (in bytes) velow which the contents of a BLOB or Picture attribute are embedded into the main file
	*/
	exportAsSQL(exportFolder: WAKFolderInstance, numFiles?: Number, fileLimitSize?: Number, attLimitSize?: Number) : void;
	
	/**
	* Search operation in a the DatastoreClass or EntityCollection that returns `the first entity` found in an object of type `Entity`
	* ## Important :
	* ``
	* The find( ) method is equivalent to executing a query( ) followed by retrieving the first entity:
	* For more details and exemples check the Query method section
	* ``
	* #### Example1 : With QueryString syntax
	* ```javascript
	* ds.Employee.find( "name == DOE");
	* ```
	* #### Example2 :  With placeholders syntax
	* ```javascript
	* ds.Employee.find( 'name ==:1', "DOE");
	* ```
	* @param queryString 
	* @param valueList  Value(s) to compare when using placeholders
	* @param options 
	* @returns The first found entity in the collection
	* 
	*  
	*/
	find(queryString: String, valueList: any[], options : Object) : Entity;
	
	
	
	/**
	* Returns the entity in the first position of the entity collection or datastore class
	* #### Example
	* ```javascript
	* ds.Employee.query('ID > 2').first()  //exemple1
	* ds.Company.first()  //exemple2
	* ```
	*/
	first() : Entity;
	
	
	
	/**
	* Executes the callbackFn function on each entity in the entity collection(or Dataclass) in ascending order
	* @param callbackFn Function Handler function to invoke for each entity in the collection
	* ``
	* The callbackFn function accepts two parameters: function (`thisArg`, `iterator`)
	* -  The first parameter, `thisArg`, represents the entity currently being processed. When it is executed, the function receives in this parameter the entity on which it iterates (the parameter is used like the keyword `this`). You can then perform any type of operation on the values of the entity.
	* - The second (optional) parameter, `iterator`, is the iterator. When it is executed, the function receives in this parameter the position of the element currently being processed in the entity collection. You can use it, for example, to display a counter.
	* ``
	* @warning The forEach( ) method includes an optimized mechanism that triggers the entity to be saved automatically if it has been modified, and not saved when it hasn't.
	* You can however call the save( ) method anyway to manage any errors in a try/catch structure.  (In this case the call is detected by Wakanda and the entity is not saved a second time)
	* #### Example 
	* ```javascript
	*  // We want to give a 5% raise to all employees with a salary less than 5,000.
	* mySet = ds.Employee.query('salary < 5000') ;
	* mySet.forEach(
    * function( emp ) {
	* emp.salary *= 1.05;
	* // unnecessary to save modification forEach does it automatically when needed
    * });
	* ```
	*/
	forEach(callbackFn: Function) : void;
	
	
	
	
	
	/**
	* Returns the datastore class (object of the DatastoreClass type) of the entity collection.
	*
	* To get the DataClass name displayed in must be followed by the getName() or toString() api 
	* #### Example
	* ```javascript
	* - ds.MyDataClass.all().getDataClass().toString()  //to a collection with toString
	* - ds.MyDataClass.first().getDataClass().getName() // to an entity with getName()
	* ```
	* Another example on a model event :
	* ```javascript
	*  
	*
	* // In the onInit event of an extended datastore class, you want to fill in the 'category' attribute the name of the derived class. 
	* // You can write:
	* model.Manager.events.init = function(event)
	* {
    *    //get the name of the class of the entity
    *  var myType = this.getDataClass().getName();
    *   //fill it in the category attribute
    * this.category = myType;
	* };
	* ```
	*/
	getDataClass() : DatastoreClass;
	
	
	
	/**
	* Returns the maximum value among all the values of attribute in the entity collection or datastore class
	* @param attribute DatastoreClassAttribute Attribute for which you want to get the highest value.
	* @returns Number Highest value of attribute
	* #### Example 1  
	* ```javascript
	* //We want to find the highest salary among all the female employees:
	* var fColl = ds.Employee.query("gender == :1","female");
	* var maxFSalary = fColl.max("salary");
	* ```
	* #### Example 2 - Max with object attributes
	* 
	* ```javascript
	* var value = ds.MyClass.all().max("objectAtt.prop") //Highest of all prop attribute values
	* ```
	*/
	max(attribute: DatastoreClassAttribute) : Number;



	/**
	*returns the lowest (or minimum) value among all the values of attribute in the entity collection or datastore class
	* @param attribute DatastoreClassAttribute Attribute for which you want to get the lowest value.
	* @returns Number Lowest value of attribute
	* #### Example 1  
	* ```javascript
	* //We want to find the lowest salary among all the female employees:
	* var fColl = ds.Employee.query("gender == :1","female");
	* var maxFSalary = fColl.min("salary");
	* ```
	* #### Example 2 - Min with object attributes
	* 
	* ```javascript
	* var value = ds.MyClass.all().min("objectAtt.prop") //Lowest of all prop attribute values
	* ```
	*/
	min(attribute: DatastoreClassAttribute) : Number;
	
	
	
	
	
	/**
	* Minus method excludes from the entity collection to which it is applied the entities that are in the collection2 and returns the resulting entity collection
	* @param collection2  `The collection to substract`
	* @returns Resulting EntityCollection (unsorted)
	* @warning The resulting collection is always `unsorted`. For more details about sorted/unsorted collection : http://doc.wakanda.org/home2.en.html%23/Datastore/Entity-Collection/length.303-638616.en.html#/Wakanda/0.Beta/Unsorted-vs-Sorted-Entity-Collections.300-932765.en.html
	* #### Example 1
	* ```javascript
	* // We want to have a collection of female employees named "Jones" who live in New York :
	* var coll1 = ds.Employee.query("name =:1", "Jones") ;
	* var coll2 = ds.Employee.query("city=:1", "New York") ;
	* var coll3 = coll1.and(coll2).minus(ds.Employee.query("gender ='male'"));
	* ```
	*/
	minus(collection2: EntityCollection) : EntityCollection;




	/**
	*creates a new entity collection that contains all the entities from the entity collection to which it is applied and all the entities from the collection2 entity collection
	* @param collection2 
	* @returns Merged resulting entity collection (unsorted)
	* @warning The resulting collection is always `unsorted`. For more details about sorted/unsorted collection : http://doc.wakanda.org/home2.en.html%23/Datastore/Entity-Collection/length.303-638616.en.html#/Wakanda/0.Beta/Unsorted-vs-Sorted-Entity-Collections.300-932765.en.html
	* #### Example 
	* ```javascript
	* var coll3 = coll1.or(coll2)
	* ```
	*/
	or(collection2: EntityCollection) : EntityCollection;
	
	
	
	
	/**
	* The orderBy method sorts the entities in the entity collection or datastore class and returns a new sorted entity collection
	* @param attributeList DatastoreClassAttribute Attribute(s) to be sorted and (if String) order by direction(s)
	* @param sortOrder string `asc` (by `default`) for ascending sort / `desc` for descending.
	* @info You can pass from 1 to x attributes separated by commas
	* #### Example1 orderBy with Mutliple Attributes
	* ```javascript
	*  // This example performs a simple search and returns an entity collection that has been sorted on two attributes, the first in descending order
	*  var mySet = ds.People.query("salary > 10000");
    *  var mySet2 = mySet.orderBy("salary desc,city");
	* ```
	* #### Example2 orberBy with a relation attribute 
	* ```javascript
	* // This example sorts employees with a salary greater than 10,000 by the city where their company is located, using a relation attribute
	* var mySet = ds.People.query("salary > 10000");
	* mySet = mySet.orderBy(ds.People.employer.city); // `employer` is a relation attribute
	* ```
	* #### Example3 orberBy with object attributes
	* ```javascript
	* ds.MyClass.all().orderBy("objectAtt.prop desc")
	* ```
	*/
	orderBy(attributeList: DatastoreClassAttribute, sortOrder?: String) : EntityCollection;
	
	
	
	
	/**
	*searches all the entities in the datastore class or entity collection using the search criteria specified in queryString and returns a new collection containing the entities found
	* @param queryString  `search criteria`
	* @param value  `Value(s) to compare using placeholders`
	* @param options Object `query options` 
	*       
	* 
	* #### Important Note
	* Two different syntaxes are allowed.
	* - **Option** 1 : Pass a valid queryString : 
	* ```javascript
	* ds.People.query("lastname == dubois and firstname == jules");
	* ```
	* - **Option 2** : Use placeholders (useful when using variables) : 
	*```javascript
	* ds.People.query("lastname== :1 AND firstname == :2" , "dubois" , "jules");
	* ```
	*  <!-- -->


	*  **Options object description**


	* <!-- -->
	* - __queryPath__ : boolean; default `false`  Returs the performed query
	* - __queryPlan__ : boolean; default `false`  Returns the planned query
	* - __allowJavascript__ : boolean default `false` Allow direct JavaScript execution in the query string. The queryString must be prefixed with the `$` symbol 
	* ``


	* #### Comparators  

	* | Symbol to use | Comparison               | Comment                                                         |
	* |---------------|--------------------------|-----------------------------------------------------------------|
	* | ==            | like                     | supports the wildcard (*), neither case-sensitive nor diacritic |
	* | ===           | Equal to                 | supports the wildcard (*), neither case-sensitive nor diacritic |
	* | in            | Is in Array              |                                                                 |
	* | !=            | Not Like                 |                                                                 |
	* | !==           | Not Equal to             |                                                                 |
	* | >             | Greater than             |                                                                 |
	* | >=            | Greater than or equal to |                                                                 |
	* | <             | Less han                 |                                                                 |
	* | <=            | Less than or equal to    |                                                                 |
	* | begin         | Begins with              | "Begin t" is thus equivalent to "== t*"                         |
	* | %%            | Contains keyword         | works with text or picture type                                 |
	* | =%            | Matches                  | Use with JavaScript Regex                                       |
	* | !=%           | Does not match           | Use with JavaScript Regex                                       |
	*
	* 
	* #### OPERATORS
	````
	 | Symbol to use | operation | 
	 |---------------|-----------|
	 | &             | AND       |
	 | |             | OR        | 
	 | !             | NOT       |
	 | ^             | EXCEPT    |
	````
	* #### EXAMPLES
	*  <details> <summary>Click __Here__ to Expand </summary>
	* <!-- -->
	*  <summary> Simple placeholders </summary>
	* ```javascript
	* //This example selects suppliers whose name contains "bob":
	* var coll = ds.Supplier.query( "name == :1", "*bob*")
	* // This example selects suppliers whose name does not begin with the letter T:
	* var coll = ds.Supplier.query( "name not like :1", "T*")
	* //This example selects suppliers whose name begins with "Sm" and ends with "th":
	* var coll = ds.Supplier.query( "name == :1", "Sm*th")
	* //This example selects employees hired before November 13, 2011:
	* var emp = ds.Employee.query( "dateHired <= :1", 2011-11-12T23:00:00Z)
	* //The following example finds the entities of American, Spanish and German customers:
	* var coll = ds.Customer.query( "country in :1", ['US','SP','GM']);
	* ```
	* 
	* <!-- -->
	*  <summary> Multi placeholders and variables</summary>
	* ```javascript
	*  // The following example finds all articles containing at least one keyword from a list and then gets all the articles written by the same authors:
	* var arrKey= ["finance", "money" , "financial" , "economic"];
	* var coll1 = ds.Article.query("keywords in :1" , arrKey); // finds all articles containing one or several keywords
	* var coll2 = ds.Article.query( "author in :1" , coll1.author) ; // and finds all articles written by the authors
    * // found in the first query results
	* ```
	* 
	* <!-- -->
	*  <summary> With Options parameters </summary>
	* **queryPath & queryPlan options**
	* ```javascript
	* var mySet = ds.Employee.query("age < :1  or worksFor.name = :2 and ID < :3", 40, "Apple", 8, {queryPath:true, queryPlan:true});
	* var arrComp = [mySet.queryPlan,mySet.queryPath];
	* arrComp;
	* ```
	* <!-- -->
	* **allowJavascript options**
	* ```javascript
	* 
	* ds.Employee.query("$(this.name.length == this.firstname.length)", { allowJavascript: true })  
	* ```
	* ```javascript
	* // exemple2
	* ds.Company.query("name = :1 and city= :2 and $(myString.indexOf(activity) != -1)",  "Acme", "London", { allowJavascript: true }) 
	* ```
	*  
	*/
	query(queryString: String, valueList: any[], options?: Object) : EntityCollection;
	
		
	/**
	* Permanently removes entities from the datastore
	* - When you apply it to an entity collection, it removes the entities belonging to that entity collection,
    * - When you apply it to a datastore class, it removes all the entities in the datastore class.
	*
	* #### Examples
	* ```javascript
	* // Applied to a Dataclass 
	* ds.Dataclass1.remove();
	* ```
	* ```javascript
	* // Applied to a collection
	*  ds.Dataclass1.query('ID > 3 & ID < 5').remove();
	* ```
	* ```javascript
	* // Applied to an entity
	* ds.Dataclass1.first().remove();
	* ```
	* ```javascript
	* // Applied at the Model level (Entity method on the Customer dataclass)
	* model.Customer.entityMethods.remove = function() {
    * this.remove();
	* };
	* ```
	* 
	*/
	remove() : void;
	
	
	
	
	
	/**
	*returns the sum (i.e., total of all the values) of attribute for the datastore class or entity collection
	* @param DatastoreClassAttribute Attr
	ibute whose sum you want to calculate
	* @param distinct  `false` by Default Use only entities that have different values
	* #### Example 1
	* ```javascript
	*  var highSalaries = ds.Employees.query("salary > 30000").sum("salary" , true);
	* ```
	* #### Example2 With Object attributes
	* ```javascript
	* var propSum = ds.MyClass.all().sum("objectAtt.prop") //sum of all prop attribute values
	* ```
	*/
	sum(attribute: DatastoreClassAttribute, distinct?: Boolean) : Number;





	/**
	* The toArray() method creates and returns a JavaScript array where each element is an object containing a set of properties and values corresponding to the attribute names and values for a datastore class or an entity collection
	* @param attributeList DatastoreClassAttribute List of attributes to return as array or "" to return all attributes
	* @param sortList string list of attributes used for the sort
	* @param key boolean Include the entity key and stamp `false` by default
	* @param skip number Position of starting entity to return
	* @param top number Number of entities to return
	* @returns Array containing attributes and values of datastore class or entity collection
	* 
	* #### Note
	* You can of course navigate through dataclasses via relation attributes.
	* In this scenario you can even limit the number of related entities fetched by passing `RelatedAttribure: N` (where N represents the number of sub elements)
	* #### EXAMPLES 
	*  <details> <summary> Click to Expand </summary>
	*  ### Simple case
	* ```javascript
	* var myArray = ds.Employee.toArray("firstName,lastName,salary");
	* // myArray[0] contains {firstName: 'John', lastName: 'Smith', salary: 5000} 
	* ```
	*  ### To get all the attributes from a collection
	* ```javascript
	*  var myColl = ds.Employee.query("salary >= 6000 order by salary asc");
	*  var myArray = myColl.toArray("");     // return all attributes
	* ```
	* ### Example with relations and options (key, skip , top)
	* ```javascript
	*  var myArray = ds.Employee.toArray("name, employer.name, employer.location", true, 0 , 1)  // employer is a relation attribute related to another dataclass
	* // myArray[0] contains { __KEY: '0', __STAMP: 2,name: 'Smith', employer: {name: 'ACME', location: 'Memphis'}}
	*  ```
	* ### Example with Sort, and Sub filtered Relations (three levels)
	* ```javascript
	* 
	* // - Retrieve the first five students.
	* // - Limit the number of courses per student to five.
	* // - Sort arrays by the student's first name and sort course sub-arrays by subject name. Both in ascending order.
	* // - skip the 1st result 
	*  var sel = ds.Student.all();
	*  var myArray = sel.toArray("fullName, Course:5, Course.matter, Course.teacher.fullName", "firstName, Course.matter", 1, 5);
	* ```
	* 
	*/
	toArray(attributeList: DatastoreClassAttribute, sortList?: String, key?: Boolean, skip?: Number, top?: Number): any[];
	
	
	
	/**
	*returns a string representation of the entity or entity collection
	* #### Example 
	* ```
	* ds.Dataclass1.query('ID > 3').toString()  // applied to a collection 
	* ds.Dataclass1.first().toString() // applied to an entity
	* ```
	*/
	toString() : String;
}

interface DatastoreClassAttribute extends String {
	
}




interface WAKDirectory {
    /**
     * Create a new user session and sets it as the current session.
     * 
     * ```javascript
     * var cur = directory.currentSession;
     * console.log( cur.ID );
     * // BF44D6E51B8FAKE485D8966ED3EDF6DD
     * 
     * // Create a new session and keep previous session
     * directory.createUserSession(
     *     {
     *         ID: '0001000100010001000100010001000100010001',
     *         name: 'jsmith',
     *         fullName: 'Jennifer Smith',
     *         belongsTo: [ 'Manager' ],
     *         lifeTime: 60*60
     *     },
     *     true
     * );
     * 
     * console.log( directory.currentSession.ID );
     * // 1E121BA4AE82446B9FDB430F0A9055C6
     * // The new session is now the current session
     * 
     * var previousSession = directory.getSession( 'BF44D6E51B8FAKE485D8966ED3EDF6DD' );
     * console.log( previousSession.ID );
     * // BF44D6E51B8FAKE485D8966ED3EDF6DD
     * // The previous session is still valid
     * ```
     * 
     * @param sessionObj Describes the session to create
     * @param keepPreviousSession (default `false`) Set to `true` if you want to keep the previous user session, `false` if you want to expire the previous user session.
     * 
     */
    createUserSession(sessionObj: WAKConnectionSessionInfo, keepPreviousSession?: Boolean): void;
    /**
     * The current user who opened the user session.
     */
    currentUser: User;
    /**
     * The current user session.
     */
    currentSession: WAKConnectionSession;
    /**
     * Add a new group to the directory and returns it.
     * 
     * ```javascript
     * var myNewGroup = directory.addGroup( 'astronauts' );
     * ```
     * 
     * @warning All updates done to the `directory` are temporary. Use `directory.save()` to save all updates on disk.
     * @param name Describes the group name
     * @returns Returns the new group
     */
    addGroup(name: String): Group;
    /**
     * Add a new user to the directory and returns it.
     * 
     * ```javascript
     * var myNewUser = directory.addUser( 'Thomas Pesquet' );
     * ```
     * 
     * @warning All updates done to the `directory` are temporary. Use `directory.save()` to save all updates on disk.
     * @param name Describes the user name
     * @param password Describes the user password
     * @param fullName Describes the user fullname
     * @returns Returns the new user
     */
    addUser(name: String, password: String, fullName?: String): User;
    /**
    * Gets the HA1 key resulting from the combination of userName, password and (optionally) realm parameters using a hash Function.
    */
    computeHA1(userName: String, password: String, realm?: String): String;
    /**
     * Returns all directory groups starting with `filterString`.
     * 
     * ```javascript
     * var myGroups = directory.filterGroups( '*pers' );
     * ```
     * 
     * @param filterString Describe the filtering string
     * @returns Returns an array of group
     */
    filterGroups(filterString: String): Array<Group>;
    /**
     * Returns all directory users starting with `filterString`.
     * 
     * ```javascript
     * var myUsers = directory.filterUsers("Jo*");
     * ```
     * 
     * @param filterString Describe the filtering string
     * @returns Returns an array of user
     */
    filterUsers(filterString: String): Array<User>;
    /**
     * Get an active session object from a session id.
     * 
     * ```javascript
     * var previousSession = directory.getSession( 'BF44D6E51B8FAKE485D8966ED3EDF6DD' );
     * ```
     * 
     * @param sessionID Describes the string session id
     * @returns Returns the session object if any
     */
    getSession(sessionID: String): WAKConnectionSession;
    // /**
    //  * Get all active user sessions.
    //  * 
    //  * ```javascript
    //  * // Get all active user session
    //  * var sessionArray = directory.getUserSessions();
    //  * ```
    //  * 
    //  * @returns Returns an array of session object if any
    //  */
    // getUserSessions(): Array<ConnectionSession>;
    // /**
    //  * Get all active user sessions for a user ID.
    //  * 
    //  * ```javascript
    //  * // Get all active user session for the current user
    //  * var sessionArray = directory.getUserSessions( currentSession().user.ID );
    //  * ```
    //  * 
    //  * @param userId Describes a user ID.
    //  * @returns Returns an array of session object if any.
    //  */
    // getUserSessions(userId: String): Array<ConnectionSession>;
    // /**
    //  * Get all active user sessions for a user.
    //  * 
    //  * ```javascript
    //  * // Get all active user session for the current user
    //  * var sessionArray = directory.getUserSessions( currentSession().user );
    //  * ```
    //  * 
    //  * @param user Describes a user object.
    //  * @returns Returns an array of session object if any.
    //  */
    // getUserSessions(user: User): Array<ConnectionSession>;
    /**
     * Returns the local Group Object referencing the remote group with the alias (i.e. the local name) you passed in the alias parameter.
     * @warning Requires LDAP component.
     */
    getRemoteGroupByAlias(alias: String): Group;
    /**
     * Returns a local Group Object referencing the remote group that corresponds to the unique Distinguished Name (DN) you passed in the dn parameter.
     * @warning Requires LDAP component.
     */
    getRemoteGroupByDN(dn: String): Group;
    /**
     * Gets a group from its name or ID.
     * 
     * ```javascript
     * var myGroup = directory.group( 'Spies' );
     * ```
     * 
     * @param name Describes the group name or ID
     * @returns Returns the group
     */
    group(name: String): Group;
    /**
     * Authenticates a user by their name and key and, in case of success, opens a new user Session on the server.
     * 
     * ```javascript
     * directory.loginByKey('john', '6153A6FA0E4880D9B8D0BE4720F78E895265D0A9');
     * directory.loginByKey('john', '6153A6FA0E4880D9B8D0BE4720F78E895265D0A9', 60*60);
     * ```
     * 
     * @param name Describes the user name
     * @param key Describes a computed key associated to the user
     * @param timeOut Defines the user session timeout (in seconds)
     * @returns Returns `true` if authentication succeed and `false` if an error occured
     */
    loginByKey(name: String, key: String, timeOut?: Number): Boolean;
    /**
     * Authenticates a user by their name and password and, in case of success, opens a new user Session on the server.
     * 
     * ```javascript
     * directory.loginByPassword('john', 'my-password');
     * directory.loginByPassword('john', 'my-password', 60*60);
     * ```
     * 
     * @param name Describes the user name
     * @param password Describes the user password
     * @param timeOut (seconds) Defines the user session timeout
     * @returns Returns `true` if authentication succeed and `false` if an error occured
     */
    loginByPassword(name: String, password: String, timeOut?: Number): Boolean;
    /**
     * Logs out the user from its current session on the Wakanda server.
     * 
     * ```javascript
     * directory.logout();
     * ```
     * 
     * @returns Returns `true` if the user has been successfully logged out and `false` if an error occured
     */
    logout(): Boolean;
    /**
     * Saves all changes made in the directory.
     * 
     * ```javascript
     * directory.save();
     * ```
     * 
     * @returns Returns `true` if successfully saved, `false` otherwise.
     */
    save(): Boolean;
    /**
     * Saves all changes made in the directory.
     * 
     * ```javascript
     * directory.save( 'PROJECT/backups/2016-01-01.waDirectory' );
     * ```
     * 
     * @warning Destination file must exist
     * @param backup Describes a file path for the directory backup.
     * @returns Returns `true` if successfully saved, `false` otherwise.
     */
    save(backup: String): Boolean;
    /**
     * Saves all changes made in the directory.
     * 
     * ```javascript
     * var myFile = new File( 'PROJECT/backups/2016-01-01.waDirectory' );
     * directory.save( myFile );
     * ```
     * 
     * @warning Destination file must exist
     * @param backup Describes a file for the directory backup.
     * @returns Returns `true` if successfully saved, `false` otherwise.
     */
    save(backup: WAKFileInstance): Boolean;
    /**
     * Sets the session whose UUID is passed in sessionID as the new current session of the running thread.
     * 
     * ```javascript
     * console.log(directory.currentSession.ID);
     * // 2EA82764A075497181278B2F05DA2EDA
     * directory.setCurrentSession('E8CBA745124D4BE4BF7D5A224183EC8E', true);
     * console.log(directory.currentSession.ID);
     * // E8CBA745124D4BE4BF7D5A224183EC8E
     * directory.getSession('2EA82764A075497181278B2F05DA2EDA');
     * // null
     * // Previous session has expire
     * ```
     * 
     * @param sessionId Describes the active user session to set as current user session
     * @param forceExpire (default: `false`) Set to `true` if the previous user session must expire, `false` otherwise. 
     */
    setCurrentSession(sessionId: String, forceExpire?: Boolean): void;
    /**
     * Handles and manages sessions through a SSJS module.
     * 
     * ```javascript
     * // Usually defined in a boostrap file
     * directory.setSessionManager( 'session' );
     * // Refers to PROJECT/modules/session/index.js module
     * ```
     * 
     * The module must export the following methods to handle all session operations:
     * 
     * ```javascript
     * // PROJECT/modules/session/index.js
     * // This session manager saves all session in the storage (could be a Redis instead)
     * 
     * // Called everytime the server creates or updates a session
     * exports.writeSession = function( session ){
     *     // Handle/save this data anywhere you want
     *     console.log( session.userName +' logged-in at '+ new Date() );
     *     // Save session in the storage
     *     var sessionInfo = JSON.stringify( session );
     *     storage[ session.sessionID ] = sessionInfo;
     *     
     *     // Return true as everything is ok
     *     return true;
     * }
     * // Called everytime the server needs a session description
     * exports.readSession = function( session ){
     *     var sessionID = session.sessionID;
     *     var sessionInfo = storage[ sessionID ];
     *     
     *     if( sessionInfo === undefined ){
     *         return false; // Error, sessionInfo is empty
     *     }
     *     
     *     sessionInfo = JSON.parse( sessionInfo );
     *     
     *     session.userID = sessionInfo.userID;
     *     session.userName = sessionInfo.userName;
     *     session.storage = sessionInfo.storage;
     *     session.belongsTo = sessionInfo.belongsTo;
     *     session.requestInfo = sessionInfo.requestInfo;
     *     session.lifeTime = sessionInfo.lifeTime;
     *     session.expiration = new Date( sessionInfo.expiration );
     *     
     *     // Return true as everything is ok
     *     return true;
     * }
     * // Calles everytime the server removes a session
     * exports.removeSession = function( session ){
     *     console.log( session.userName +' logged-out at '+ new Date() );
     *     var sessionID = session.sessionID;
     *     storage[ sessionID ] = undefined;
     *     // Return true as everything is ok
     *     return true;
     * }
     * ```
     * 
     * @param modulePath Describes the module path
     */
    setSessionManager(modulePath: String);
    /**
     * Defines a module to manage all login requests to Wakanda Server.
     * 
     * ```javascript
     * directory.setLoginManager('my-login-module');
     * directory.setLoginManager('my-login-module', 'myDirectoryGroup');
     * ```
     * 
     * This module is defined inside `PROJECT/modules/my-login-module` or `SOLUTION/modules/my-login-module`.
     * If the module is not found in the project, it is then check inside the solution.
     * It must export a `login()` method and return the `user` object.
     * 
     * ```javascript
     * // my-login-module/index.js
     * // Export a login() function
     * exports.login = function(username, password){
     *     // Verify the username/password through Directory or any other User DB
     *     // If user is authenticated then return the user object
     *     if (user)
     *         return {
     *           // Unique user ID. Must not collide with an existing user ID
     *           ID: 545642165412,
     *           name: user.name,
     *           fullName: user.fullname,
     *           // References the Directory group where the user belongs
     *           belongsTo: 'free-customer',
     *           // Defines the sessionStorage property of the user session
     *           storage: {}
     *         };
     *     }
     *     // If user not authenticated then return an error
     *     else if (!user)
     *     {
     *         return {
     *           // Error code returned
     *           error: 548,
     *           // Error text returned
     *           errorMessage: 'Authentication failed. Login or Password maybe wrong.'
     *         };
     *     }
     *     // or continue using the standard process (with the internal directory)
     *     else
     *     {
     *         return false;
     *     }
     * }
     * ```
     * 
     * @param moduleName Module name which handles the login
     * @param group Group rights assign to the login manager for handling its actions
     */
    setLoginManager(moduleName: String, group?: String): void;
    /**
     * Synchronizes the local Wakanda directory with a remote LDAP directory.
     * @warning Requires LDAP component.
     */
    sync(remoteLDAP?: Object): void;
    /**
     * Gets a user from its name or ID.
     * 
     * ```javascript
     * var myUser = directory.user( 'Thomas Pesquet' );
     * ```
     * 
     * @param name Describes the user name or ID
     * @returns Returns the user
     */
    user(name: String): User;
}



interface File {
    /**
     * References a file.
     * The file does not have to exist.
     * 
     * #### Example 1: Get a reference to an existing file
     * ```javascript
     * var myFile = new File( 'PROJECT/bootstrap.js' );
     * console.log( myFile.exists );
     * // true
     * ```
     * 
     * #### Example 2: Get a reference to a missing file
     * ```javascript
     * var myFile = new File( 'PROJECT/file-to-create.js' );
     * console.log( myFile.exists );
     * // false
     * ```
     * 
     * @param path Absolute path of the file to reference.
     */
    new (path: String): WAKFileInstance;
    /**
     * References a file.
     * The file does not have to exist.
     * 
     * #### Example 1: Get a reference to an existing file
     * ```javascript
     * var myFolder = new Folder( 'PROJECT/' );
     * var myFile = new File( myFolder, 'bootstrap.js' );
     * console.log( myFile.exists );
     * // true
     * ```
     * 
     * #### Example 2: Get a reference to a missing file
     * ```javascript
     * var myFolder = new Folder( 'PROJECT/' );
     * var myFile = new File( myFolder, 'file-to-create.js' );
     * console.log( myFile.exists );
     * // false
     * ```
     * 
     * @param folder Folder containing the file
     * @param fileName Name of the file to reference in the folder path
     */
    new (folder: WAKFolderInstance, fileName: String): WAKFileInstance;
    /**
     * Check if the path references a file.
     * 
     * ```javascript
     * var myIsFile = File.isFile( 'PROJECT/bootstrap.js' );
     * console.log( myIsFile );
     * // true
     * ```
     * 
     * @param path Absolute path to a file
     * @returns `true` is the path references a file, `false` otherwise.
     */
    isFile(path: String): Boolean;
}

interface WAKFileInstance extends WAKBlobInstance {
    /**
     * Creation date for the file.
     */
    readonly creationDate: Date;
    /**
     * `true` if the file exists at the defined path, `false` otherwise.
     */
    readonly exists: Boolean;
    /**
     * File extension.
     */
    readonly extension: String;
    // /**
    //  * FileSystem of the object.
    //  */
    // readonly filesystem: FileSystemSync;
    /**
     * Last modification date for the file if any.
     */
    readonly lastModifiedDate: any;
    /**
     * Name of the file with the extension and without the path.
     */
    readonly name: string;
    /**
     * Name of the file without the extension.
     */
    readonly nameNoExt: String;
    /**
     * Parent folder of the file.
     */
    readonly parent: WAKFolderInstance;
    /**
     * Full path of the file.
     */
    readonly path: String;
    /**
     * `true` if the file is read only, `false` otherwise.
     */
    readonly readOnly: Boolean;
    /**
     * `true` if the file is visible, `false` otherwise.
     */
    readonly visible: Boolean;
    /**
     * Creates a new file on disk.
     * 
     * ```javascript
     * var myFile = new File( 'PROJECT/my-created-file.js' );
     * var myResult = myFile.create();
     * console.log( myResult );
     * // true
     * ```
     * 
     * @throws An error if something goes wrong: file already exists, invalid path, ...
     * @returns `true` if the file is well created
     */
    create(): Boolean;
    /**
     * Returns the size of the free space (expressed in bytes) available on the volume where the File object is stored.
     * @param quotas (default: `true`) `true` if consider the whole volume, `false` if consider only the allowed size for the quota
     */
    getFreeSpace(quotas?: Boolean): Number;
    /**
     * Returns the absolute URL of the File object.
     * @param encoding (default: `false`) `true` if encode the url, `false` otherwise.
     */
    getURL(encoding?: Boolean): String;
    /**
     * Returns the total size (expressed in bytes) of the volume where the File object is stored.
     */
    getVolumeSize(): Number;
    /**
     * Moves the file to the specified destination.
     * 
     * ```javascript
     * var myFile = new File( 'PROJECT/my-file.js' );
     * myFile.create();
     * myFile.moveTo( 'PROJECT/my-moved-file.js', yes );
     * // myFile always references the "my-file.js" file
     * // The referenced file did not change with the moveTo() action.
     * console.log( myFile.path );
     * ```
     * 
     * @warning After the `moveTo()` action, the file referenced is still the source file and not the destination file. Therefore, the referenced file does not exist anymore.
     * @param file Destination file path
     * @param overwrite `true` if the file can be overwritten, `false` otherwise
     */
    moveTo(file: WAKFileInstance, overwrite?: Boolean): void;
    /**
     * Moves the file to the specified destination.
     * 
     * ```javascript
     * var mySourceFile = new File( 'PROJECT/my-file.js' );
     * var myDestinationFile = new File( 'PROJECT/my-moved-file.js' );
     * // The file must exists to be renamed
     * myFile.create();
     * myFile.moveTo( myDestinationFile, yes );
     * // myFile always references the "my-file.js" file
     * // The referenced file did not change with the moveTo() action.
     * console.log( myFile.path );
     * // PROJECT/my-file.js
     * ```
     * 
     * @warning After the `moveTo()` action, the file referenced is still the source file and not the destination file. Therefore, the referenced file does not exist anymore.
     * @param file Destination file path
     * @param overwrite `true` if the file can be overwritten, `false` otherwise
     */
    moveTo(file: String, overwrite?: Boolean): void;
    /**
     * Removes the file from the disk.
     * @returns `true` if the file is removed from disk, `false` otherwise.
      */
    remove(): Boolean;
    /**
     * Rename the file on disk.
     * 
     * ```javascript
     * var myFile = new File( 'PROJECT/my-file.js' );
     * // The file must exists to be renamed
     * myFile.create();
     * // The destination file name must be free
     * myFile.setName( 'my-renamed-file.js' );
     * // myFile always references the "my-file.js" file
     * // The referenced file did not change with the setName() action.
     * console.log( myFile.path );
     * // PROJECT/my-file.js
     * ```
     * 
     * @warning The file must exist on disk to be renamed
     * @warning The file destination must be free
     * @param name New file name
     * @returns `true` if the file is successfully renamed
     * @throws An error if something goes wrong: file already exists, invalid name, ...
     */
    setName(name: String): Boolean;
}


// interface FileIterator extends File {
// 	/**
// 	*puts the file pointer on the next file within an iteration of files
// 	*/
// 	next() : Boolean;
// 	/**
// 	*checks the validity of the pointer to the current File object within an iteration of files
// 	*/
// 	valid() : Boolean;
// }


interface Folder {
    /**
     * References a folder.
     * The folder does not have to exist.
     * 
     * #### Example 1: Get a reference to an existing folder
     * ```javascript
     * var myFolder = new Folder( 'PROJECT' );
     * console.log( myFolder.exists );
     * // true
     * ```
     * 
     * #### Example 2: Get a reference to a missing folder
     * ```javascript
     * var myFolder = new Folder( 'PROJECT/missing-folder' );
     * console.log( myFolder.exists );
     * // false
     * ```
     * 
     * @param path Absolute path of the folder to reference.
     */
    new (path: String): WAKFolderInstance;
    /**
     * Check if the path references a folder.
     * 
     * ```javascript
     * var myIsFolder = Folder.isFolder( 'PROJECT' );
     * console.log( myIsFolder );
     * // true
     * ```
     * 
     * @param path Absolute path to a folder
     * @returns `true` is the path references a folder, `false` otherwise.
     */
    isFolder(path: String): Boolean;
}

interface WAKFolderInstance {
    /**
     * Creation date for the folder.
     */
    readonly creationDate: Date;
    /**
     * `true` if the folder exists at the defined path, `false` otherwise.
     */
    readonly exists: Boolean;
    /**
     * Folder extension.
     */
    readonly extension: String;
    /**
     * Array of Files.
     */
    readonly files: Array<WAKFileInstance>;
    // /**
    // *FileSystem of the object.
    // */
    // filesystem: FileSystemSync;
    /**
     * First file found in the folder.
     */
    readonly firstFile: WAKFileInstance;
    /**
     * First folder (i.e., subfolder) in the folder.
     */
    readonly firstFolder: WAKFolderInstance;
    /**
     * Array of Folder objects.
     */
    folders: Array<WAKFolderInstance>;
    /**
     * Last modification date for the folder.
     */
    readonly modificationDate: Date;
    /**
     * Name of the folder without the path.
     */
    readonly name: String;
    /**
     * Name of the folder without the extension.
     */
    readonly nameNoExt: String;
    /**
     * Parent folder of the folder.
     */
    readonly parent: WAKFolderInstance;
    /**
     * Full path of the folder.
     */
    readonly path: String;
    /**
     * `true` if the folder is visible, `false` otherwise.
     */
    readonly visible: Boolean;
    /**
     * Creates a new folder on disk.
     * 
     * ```javascript
     * var myFolder = new Folder( 'PROJECT/my-created-folder' );
     * var myResult = myFolder.create();
     * console.log( myResult );
     * // true
     * ```
     * 
     * @throws An error if something goes wrong: folder already exists, invalid path, ...
     * @returns `true` if the folder is well created
     */
    create(): Boolean;
    /**
     * Calls `callback` function for each file at the first level of the folder.
     * 
     * #### Example 1: Basic usage
     * ```javascript
     * var folder = new Folder( 'PROJECT/' );
     * folder.forEachFile( function( file )
     * {
     *     console.log( file.path );
     * });
     * ```
     * 
     * #### Example 2: Override `this`
     * ```javascript
     * var folder = new Folder( 'PROJECT/' );
     * folder.forEachFile( function( file )
     * {
     *     console.log( this );
     * }, {data: 'some-data' } );
     * // {"data":"some-data"}
     * ```
     * 
     * @warning `break` is not working in `forEachFile`
     * @param callback Defines the function called for each file
     * @param callback.file Current file being processed
     * @param thisArg Defines `this` value of the callback
     */
    forEachFile(callback: (file: WAKFileInstance) => void, thisArg?: Object): void;
    /**
     * Calls `callback` function for each folder at the first level of the folder.
     * 
     * #### Example 1: Basic usage
     * ```javascript
     * var folder = new Folder( 'PROJECT/' );
     * folder.forEachFolder( function( folder )
     * {
     *     console.log( folder.path );
     * });
     * ```
     * 
     * #### Example 2: Override `this`
     * ```javascript
     * var folder = new Folder( 'PROJECT/' );
     * folder.forEachFolder( function( folder )
     * {
     *     console.log( this );
     * }, {data: 'some-data' } );
     * // {"data":"some-data"}
     * ```
     * 
     * @warning `break` is not working in `forEachFolder`
     * @param callback Defines the function called for each folder
     * @param callback.folder Current folder being processed
     * @param thisArg Defines `this` value of the callback
     */
    forEachFolder(callback: (folder: WAKFolderInstance) => void, thisArg?: Object): void;
    /**
     * Returns the size of the free space (expressed in bytes) available on the volume where the Folder object is stored.
     * @param quotas (default: `true`) `true` if consider the whole volume, `false` if consider only the allowed size for the quota
     */
    getFreeSpace(quotas?: Boolean): Number;
    /**
     * Returns the absolute URL of the Folder object.
     * @param encoding (default: `false`) `true` if encode the url, `false` otherwise.
     */
    getURL(encoding?: Boolean): String;
    /**
     * Returns the total size (expressed in bytes) of the volume where the Folder object is stored.
     */
    getVolumeSize(): Number;
    // /**
    // *puts the folder pointer on the next subfolder in an iteration of subfolders.
    // */
    // next() : Boolean;
    /**
     * Calls `callback` function for each file in the folder tree (first-level and sub-level folder).
     * 
     * #### Example 1: Basic usage
     * ```javascript
     * var folder = new Folder( 'PROJECT/' );
     * folder.parse( function( file, position, folder )
     * {
     *     console.log( '-----------------------------' );
     *     console.log( file.path );
     *     console.log( position );
     *     console.log( folder.path );
     * });
     * ```
     * 
     * #### Example 2: Override `this`
     * ```javascript
     * var folder = new Folder( 'PROJECT/' );
     * folder.parse( function( file, position, folder )
     * {
     *     console.log( this );
     * }, {data: 'some-data' } );
     * // {"data":"some-data"}
     * ```
     * 
     * @warning `break` is not working in `parse`
     * @param callback Defines the function called for each folder
     * @param thisArg Defines `this` value of the callback
     * @param callback.file  Current processed file
     * @param callback.position Position of the file currently being processed
     * @param callback.folder Folder of the processed file
     */
    parse(callback: (file: WAKFileInstance, position: Number, folder: WAKFolderInstance) => void, thisArg?: Object): void;
    /**
     * Removes the folder and its content from the disk.
     * @returns `true` if the folder is not here, `false` otherwise.
      */
    remove(): Boolean;
    /**
     * Removes the contents of the folder from the disk.
     */
    removeContent(): Boolean;
    /**
     * Rename the folder on disk.
     * 
     * ```javascript
     * var myFolder = new Folder( 'PROJECT/my-folder' );
     * // The folder must exists to be renamed
     * myFolder.create();
     * // The destination folder name must be free
     * myFolder.setName( 'my-renamed-folder' );
     * // myFolder always references the "my-folder" folder
     * // The referenced folder did not change with the setName() action.
     * console.log( myFolder.path );
     * // PROJECT/my-folder
     * ```
     * 
     * @warning The folder must exist on disk to be renamed
     * @warning The folder destination must be free
     * @param name New folder name
     * @returns `true` if the folder is successfully renamed
     * @throws An error if something goes wrong: folder already exists, invalid name, ...
     */
    setName(newName: String): void;
    // /**
    // *checks the validity of the pointer to the current folder within an iteration of folders
    // */
    // valid() : Boolean;
}

interface Group {
    /**
     * Describes the internal group ID.
     */
    ID: String;
    /**
     * Describes the group name.
     */
    name: String;
    /**
     * Returns all children directory groups starting with `filterString`.
     * 
     * ```javascript
     * var myABCDEFG;
     * var myGroups = directory.filterChildren("*cien");
     * ```
     * 
     * @param filterString Describe the filtering string
     * @param level (default: `false`) Set to `true` if you want first level results. Set to `false` otherwise.
     * @returns Returns an array of group
     */
    filterChildren(filterString: String, level?: Boolean): Array<Group>;
    /**
     * Returns all children directory groups starting with `filterString`.
     * 
     * ```javascript
     * var myGroups = directory.filterParents("*cien");
     * ```
     * 
     * @param filterString Describe the filtering string
     * @param level (default: `false`) Set to `true` if you want first level results. Set to `false` otherwise.
     * @returns Returns an array of group
     */
    filterParents(filterString: String, level?: Boolean): Array<Group>;
    /**
     * Get children groups belonging to the current group.
     * @param level (default: `false`) Set to `true` if you want first level results. Set to `false` otherwise.
     */
    getChildren(level?: Boolean): Array<Group>;
    /**
     * Get parent groups to which the current group belongs.
     * @param level (default: `false`) Set to `true` if you want first level results. Set to `false` otherwise.
     */
    getParents(level?: Boolean): Array<Group>;
    /**
     * Get users belonging to the current group.
     * @param level (default: `false`) Set to `true` if you want first level results. Set to `false` otherwise.
     */
    getUsers(level?: Boolean): Array<User>;
    /**
     * Assignes a group to one or more groups.
     * 
     * ```javascript
     * myGroup.putInto( 'sales' );
     * ```
     * 
     * @warning All updates done to the `directory` are temporary. Use `directory.save()` to save all updates on disk.
     * @param groupList Describes an array of group name
     */
    putInto(...groupList: String[]): void;
    /**
     * Assignes a group to one or more groups.
     * 
     * ```javascript
     * var SalesGroup = directory.group( 'sales' ); 
     * myGroup.putInto( SalesGroup );
     * ```
     * 
     * @warning All updates done to the `directory` are temporary. Use `directory.save()` to save all updates on disk.
     * @param groupList Describes an array of group object
     */
    putInto(...groupList: Group[]): void;
    /**
     * Removes the group from the directory.
     * @warning All updates done to the `directory` are temporary. Use `directory.save()` to save all updates on disk.
     */
    remove(): void;
    /**
     * Removes the group from group list.
     * 
     * ```javascript
     * myGroup.removeFrom( 'sales', 'finance' );
     * ```
     * 
     * @warning All updates done to the `directory` are temporary. Use `directory.save()` to save all updates on disk.
     * @param groupList Describes an array of group name
     */
    removeFrom(...groupList: String[]): void;
    /**
     * Removes the group from group list.
     * 
     * ```javascript
     * var group1 = directory.group( 'finance' ); 
     * var group2 = directory.addGroup( 'account' );
      * myGroup.removeFrom( group1 , group2 )
     * ```
     * 
     * @warning All updates done to the `directory` are temporary. Use `directory.save()` to save all updates on disk.
     * @param groupList Describes an array of group object
     */
    removeFrom(...groupList: Group[]): void;
    /**
     * Sets a local name (alias) to the group object corresponding to a remote group from a LDAP directory.
     * @warning Requires LDAP component
     */
    setAlias(alias: String): void;
}


interface HttpServer {
    /**
     * Cache properties of the HTTP server.
     */
    readonly cache: HttpServerCache;
    /**
     * Default charset value.
     */
    readonly defaultCharSet: String;
    /**
     * Host name of the server.
     */
    readonly hostName: String;
    /**
     * IP address of the server.
     */
    readonly ipAddress: String;
    /**
     * Port listened to by the server.
     */
    readonly port: Number;
    /**
     * The current HTTP Request Object.
     */
    readonly request: HTTPRequest;
    /**
     * The current HTTP Response Object.
     */
    readonly response: HTTPResponse;
    /**
     * SSL properties of the server.
     */
    readonly ssl: HttpServerSSL;
    /**
     * Return true if the HTTP Server is started.
     */
    readonly started: Boolean;
    /**
     * Adds a request handler function on the server.
     * It is recommended to write all request handler in the `bootstrap.js` file in order to be available at server start up.
     * 
     * #### Step 1: Add a request handler
     * ```javascript
     * // It is recommended to write these lines in bootstrap.js
     * // On every "/ping" requests, call "pong()" function in "request-greetings" module
     * httpServer.addRequestHandler('^/ping$', 'request-greetings', 'pong');
     * ```
     * 
     * #### Step 2: Handle the request
     * ```javascript
     * // modules/request-greetings/index.js
     * function pong( request, response ){
     *     return 'pong';
     * }
     * ```
     * 
     * @param pattern Regexp pattern to intercept a HTTP request
     * @param modulePath Path to the module that exports the functionName
     * @param functionName Function name which handles the request and returns the request response
     */
    addRequestHandler(pattern: String, modulePath: String, functionName: String): void;
    /**
     * Adds a request handler function on the server.
     * It is recommended to write all request handler in the `bootstrap.js` file in order to be available at server start up.
     * 
     * #### Step 1: Add a request handler
     * ```javascript
     * // It is recommended to write these lines in bootstrap.js
     * // On every "/ping" requests, call "pong()" function in "request-greetings.js"
     * httpServer.addRequestHandler('^/ping$', 'request-greetings.js', 'pong');
     * ```
     * 
     * #### Step 2: Handle the request
     * ```javascript
     * // request-greetings.js
     * function pong( request, response ){
     *     return 'pong';
     * }
     * ```
     * 
     * @param pattern Regexp pattern to intercept a HTTP request
     * @param filePath Path to the file that defines the functionName
     * @param functionName Function name which handles the request and returns the request response
     */
    addRequestHandler(pattern: String, filePath: String, functionName: String): void;
    /**
     * Adds a WebSocket handler script on the server.
     * It is recommended to write all websocket handler in the `bootstrap.js` file in order to be available at server start up.
     * 
     * #### Step 1: Add a websocket handler
     * ```javascript
     * // It is recommended to write these lines in bootstrap.js
     * httpServer.addWebSocketHandler('^/ping$', './websocket-greetings.js', 'websocket-id', true);
     * ```
     * 
     * #### Step 2: Handle the websocket
     * ```javascript
     * // ./websocket-greetings.js
     * // Same as for ShareWorker
     * // Called every time a new websocket is connected
     * onconnect = function ( msg ) {
     * 
     *     // Get the websocket port
     *     var wsPort = msg.ports[0];
     * 
     *     // Called every time a client sends a message    
     *     wsPort.onmessage = function( message ) {
     * 
     *         // Process data send by the client
     *         if ( message.data == 'hello' ){
     *             console.log( 'websocket data received: '+ message.data );
     *             // Send a response to client
     *             wsPort.postMessage( 'Hello back !' );
     *         }else{
     *             console.log( 'websocket data skipped: '+ JSON.stringify(message) );
     *         }
     *     };
     * 
     *     // Called when the socket receives an error
     *     wsPort.onerror = function() { 
     *         // Handle websocket errors
     *     };
     * 
     *     // Called when the socket is closed
     *     wsPort.onclose = function() { 
     *         // Do nothing and wait for another websocket connection
     *     };
     * };
     * ```
     * 
     * @param pattern Regexp pattern to intercept a WS request
     * @param filePath Absolute or relative path from the project to the file that defines the websocket handler. Filesystem are not working in filePath parameter (`PROJECT`, `SOLUTION`, ...).
     * @param socketID Socket ID usefull for `removeWebSocketHandler()`
     * @param sharedWorker `true` if uses shared worker (recommended). `false` if uses dedicated worker.
     */
    addWebSocketHandler(pattern: String, filePath: String, socketID: String, sharedWorker: Boolean): void;
    /**
     * Removes an existing request handler function on the server.
     * 
     * ```javascript
     * // Must match parameters of "addRequestHandler()"
     * // httpServer.addRequestHandler('^/ping$', 'request-greetings', 'pong');
     * httpServer.removeRequestHandler('^/ping$', 'request-greetings', 'pong');
     * ```
     * 
     * @param pattern Regexp pattern to intercept a HTTP request
     * @param modulePath Path to the module that exports the functionName
     * @param functionName Function name which handles the request
     */
    removeRequestHandler(pattern: String, modulePath: String, functionName: String): void;
    /**
     * Removes an existing request handler function on the server.
     * 
     * ```javascript
     * // Must match parameters of "addRequestHandler()"
     * // httpServer.addRequestHandler('^/ping$', 'request-greetings.js', 'pong');
     * httpServer.removeRequestHandler('^/ping$', 'request-greetings.js', 'pong');
     * ```
     * 
     * @param pattern Regexp pattern to intercept a HTTP request
     * @param filePath Path to the file that defines the functionName
     * @param functionName Function name which handles the request
     */
    removeRequestHandler(pattern: String, filePath: String, functionName: String): void;
    /**
     * Removes an existing websocket handler on the server.
     * 
     * ```javascript
     * // Must match socketID parameter of "addWebSocketHandler()"
     * // httpServer.addWebSocketHandler('^/ping$', 'backend/websocket-greetings.js', 'websocket-id', true);
     * httpServer.removeWebSocketHandler( 'websocket-id' );
     * ```
     * 
     * @param socketID Identifies the websocket to remove
     */
    removeWebSocketHandler(socketID: String): void;
    /**
     * Starts the Wakanda HTTP server.
     */
    start(): void;
    /**
     * Stops the Wakanda HTTP server.
     */
    stop(): void;
}

interface HttpServerCache {
    /**
     * Status of the HTTP server cache.
     */
    readonly enabled: Boolean;
    /**
     * Size of the HTTP server cache in memory.
     */
    readonly memorySize: Number;
}

interface HttpServerSSL {
    /**
     * Status of the SSL protocol on the server.
     */
    readonly enabled: Boolean;
    /**
     * Port number for SSL connections.
     */
    readonly port: Number;
    /**
     * Get the full path to the SSL certificates folder used by the server (if any).
     */
    getCertificateFolder(): String;
    /**
     * Get the full path to the SSL certificates path used by the server (if any).
     */
    getCertificatePath(): String;
}




interface HTTPRequest {
    /**
     * Body of the received message.
     */
    body: String | Image | WAKBlobInstance;
    /**
     * Content-type of the request as defined in the header.
     */
    contentType: String;
    /**
     * Header of the HTTPRequest.
     */
    headers: String[];
    /**
     * Host header of the request.
     */
    host: String;
    /**
     * True if the connection uses SSL, false otherwise.
     */
    isSSL: Boolean;
    /**
     * Local server IP address (IPv4 or IPv6).
     */
    localAddress: String;
    /**
     * Local server port number.
     */
    localPort: Number;
    /**
     * HTTP method name.
     */
    method: String;
    /**
     * Parts of a HTTP body (for multipart forms).
     */
    parts: MIMEMessage;
    /**
     * User password for authentified requests (BASIC mode only).
     */
    password: String;
    /**
     * Raw URL of the request.
     */
    rawURL: String;
    /**
     * Remote client IP address (IPv4 or IPv6).
     */
    remoteAddress: String;
    /**
     * Remote client port number.
     */
    remotePort: Number;
    /**
     * Request-line received by the server.
     */
    requestLine: String;
    /**
     * Decoded URL of the request.
     */
    url: String;
    /**
     * Path part of the request.
     */
    urlPath: String;
    /**
     * Query part of the request.
     */
    urlQuery: String;
    /**
     * User name for authentified request.
     */
    user: String;
    /**
     * Version of the HTTP protocol.
     */
    version: String;
}


interface HTTPResponse {
    /**
     * Body of the returned message to set.
     */
    body: WAKBlobInstance | Image | String;
    /**
     * Content-type of the response to set.
     */
    contentType: String;
    /**
     * Header of the HTTPResponse.
     */
    headers: String[];
    /**
     * Return status code to set.
     */
    statusCode: Number;
    /**
     * Indicates if the contents of the HTTPResponse should be cached on the server.
     */
    allowCache(useCache: Boolean): void;
    /**
     * Sets custom compression thresholds for the HTTPResponse.
     * @param minThreshold Minimum size (in bytes) below which the response should not be compressed or -1 to use default value
     * @param maxThreshold Maximum size (in bytes) up to which the response should not be compressed or -1 to use default value
     */
    allowCompression(minThreshold: Number, maxThreshold: Number): void;
    /**
     * Sends an HTTPResponse in chunks without knowing in advance the size of the data.
     */
    sendChunkedData(data: String | Image | WAKBlobInstance): void;
}

/**
 * @warning The Image API is partially supported on Linux platforms:
 * - You can only load images of the PNG or JPG types
 * - For more details, check [doc center](http://doc.wakanda.org/home2.en.html#/Images/Image-Instances.201-659829.en.html)
 */

interface Image {
    /**
     * Height of the image (pixels).
     */
    readonly height: Number;
    /**
     * Size of the image (bytes).
     */
    readonly length: Number;
    /**
     * Metadata associated with the image.
     */
    readonly meta: Object;
    /**
     * Size of the image (bytes).
     */
    readonly size: Number;
    /**
     * Width of the image (pixels).
     */
    readonly width: Number;
    /**
     * Stores the image object in a file.
     * 
     * #### Example 1: Basic usage
     * ```javascript
     * var myImage = loadImage( 'PROJECT/my-image.jpg' );
     * myImage.save( 'PROJECT/my-saved-image.jpg' );
     * ```
     * #### Example 2: Save image in another format
     * ```javascript
     * var myImage = loadImage( 'PROJECT/my-image.jpg' );
     * myImage.save( 'PROJECT/my-png-image.png', 'image/png' );
     * ```
     * 
     * @warning Overrides existing files
     * @param file Path to the file where to save the image
     * @param type New mime type to apply
     */
    save(file: String, type?: String): void;
    /**
     * Stores the image object in a file.
     * 
     * #### Example 1: Basic usage
     * ```javascript
     * var myFile = new File( 'PROJECT/my-saved-image.jpg' );
     * var myImage = loadImage( 'PROJECT/my-image.jpg' );
     * myImage.save( myFile );
     * ```
     * #### Example 2: Save image in another format
     * ```javascript
     * var myFile = new File( 'PROJECT/my-png-image.png' );
     * var myImage = loadImage( 'PROJECT/my-image.jpg' );
     * myImage.save( myFile, 'image/png' );
     * ```
     * 
     * @warning Overrides existing files
     * @param file File object where to save the image
     * @param type New mime type to apply
     */
    save(file: WAKFileInstance, type?: String): void;
    /**
     * Updates the image metadata.
     * 
     * ```javascript
     * var myImage = loadImage( 'PROJECT/my-image.jpg' );
     * var newMeta = { IPTC: { Keywords: ['vacation', 'snow']}};
     * myImage.saveMeta( newMeta );
     * myImage.save( 'PROJECT/my-meta-image.jpg' );
     * ```
     * 
     * @warning A `save` is required in order to save the metadata on disk
     * @param meta Object containing the meta to update
     */
    saveMeta(meta: Object): void;
    // /**
    //  * associate a file path to an Image object
    // */
    // setPath(file: File): void;
    // /**
    //  * associate a file path to an Image object
    //  */
    // setPath(file: String): void;
    /**
     * Returns a thumbnail of the source image.
     * 
     * #### Example 1: Basic usage
     * ```javascript
     * var myImage = loadImage( 'PROJECT/my-image.jpg' );
     * var myThumbnail = myImage.thumbnail( 50, 50 );
     * myThumbnail.save( 'PROJECT/my-thumbnail.jpg' );
     * ```
     * 
     * #### Example 2: Change thumbnail mode
     * ```javascript
     * var myImage = loadImage( 'PROJECT/my-image.jpg' );
     * var myThumbnail = myImage.thumbnail( 50, 50, 2 );
     * myThumbnail.save( 'PROJECT/my-thumbnail.jpg' );
     * ```
     * 
     * @param width (pixels) Thumbnail width
     * @param height (pixels) Thumbnai height
     * @param mode (default: 6) Scale mode to apply. See [doc center](http://doc.wakanda.org/home2.en.html#/Images/Image-Instances/thumbnail.301-663098.en.html) for more details.
     */
    thumbnail(width: Number, height: Number, mode?: Number): Image;
}interface LockableKeyValueStorage extends KeyValueStorage {
    /**
     * Locks the storage object. Only the current thread can read or modify the storage object.
     */
    lock(): void;
    /**
     * Tries to lock the storage object. Returns `true` in case of success and false otherwise.
     */
    tryLock(): Boolean;
    /**
     * Removes a lock that was previously put on the storage object.
     */
    unlock(): void;
}

interface KeyValueStorage {
    /**
     * Gets the number of key/value pairs currently present in the storage object.
     */
    length: Number;
    /**
     * Removes all key/value pairs from the storage object.
     */
    clear(): void;
    /**
     * Gets a copy of the value from the storage object.
     */
    getItem(key: String): any;
    /**
     * Removes an item from the storage object.
     */
    removeItem(key: String): void;
    /**
     * Create or update an item in the storage object.
     */
    setItem(key: String, value: String | Number | Object): void;
}


interface MIMEMessage {
    /**
     * nth part of the multipart MIME message.
     */
    [n: number]: MIMEMessagePart;
    /**
     * Boundary tag used to delimit the parts.
     */
    boundary: String;
    /**
     * Number of parts.
     */
    count: Number;
    /**
     * Encoding type.
        example: 'multipart/form-data' or 'application/x-www-form-urlencoded'.
     */
    encoding: String;
    /**
     * Number of parts.
     */
    length: Number;
    /**
     * Returns the MIME message as a Blob object.
     */
    toBlob(mimeType?: String): WAKBlobInstance;
    /**
     * Returns the MIME message as a Buffer object.
     */
    toBuffer(): WAKBufferInstance;
}

interface MIMEMessagePart {
    /**
     * Body as a BLOB.
     */
    asBlob: WAKBlobInstance;
    /**
     * Body as an image.
     */
    asPicture: Image;
    /**
     * Body as a Text string.
     */
    asText: String;
    /**
     * Name of the uploaded file.
     */
    fileName: String;
    /**
     * Content-type of the part.
     */
    mediaType: String;
    /**
     * Input field name.
     */
    name: String;
    /**
     * Size of the body (in bytes).
     */
    size: Number;
    /**
     * Saves the body of the part in the file whose path is passed in filePath.
     * @param filePath file path where to save MIMEMessagePart
     * @param overWrite if true, it will override the file if already exists. Else, the save will be omitted
     */
    save(filePath: String, overWrite?: Boolean): void;
}

	interface Module {
		//TODO
	}
interface Mutex {
    /**
     * Mutex allows to control code execution order and to prevent conflicts in a multi-thread application.
     * It provides a way to pause execution in one thread until a condition is met in another.
     * 
     * ```javascript
     * // Creates/gets the "writeMutex" mutex available in all threads
     * var writeMutex = Mutex('writeMutex');
     * ```
     * 
     * @param key Describes the global mutex key
     */
    new(key: String): WAKMutexProxy;
}

interface WAKMutexProxy {
    /**
     * Locks the mutex or wait until it has been released to lock it; the thread execution is paused until then.
     * 
     * ```javascript
     * var writeMutex = Mutex('writeMutex');
     * writeMutex.lock();
     * ```
     * 
     * @returns Returns `true` if the mutex is locked
     */
    lock(): Boolean;
    /**
     * Tries to lock the mutex or returns false if it is already locked. The thread execution is not paused.
     * 
     * ```javascript
     * var writeMutex = Mutex('writeMutex');
     * writeMutex.tryLock();
     * ```
     * 
     * @returns Returns `true` if the mutex is locked, `false` otherwise
     */
    tryLock(): Boolean;
    /**
     * Unlock the mutex. The mutex must be lock in the same thread to be unlock.
     * 
     * ```javascript
     * var writeMutex = Mutex('writeMutex');
     * writeMutex.lock();
     * writeMutex.unlock();
     * ```
     * 
     * @returns Returns `true` if the mutex is unlocked, `false` otherwise
     */
    unlock(): Boolean;
}

/**
 * ### Node worker
 * 
 * A node worker is composed of 2 elements:
 * - A thread running the node worker
 * - One or more proxies communicating with the worker thread
 * 
 * ### Step 1: Define the node worker
 * 
 * ```javascript
 * // PROJECT/worker.js
 * // onconnect is called everytime a new worker proxy is created
 * onconnect = function( event )
 * {
 *     // Get the worker port for communication with the worker proxy
 *     // Always use `ports[0]`
 *     var workerPort = event.ports[0];
 * 
 *     // Send a message to the worker proxy. The worker is up and running.
 *     workerPort.postMessage({type: 'connected', says: "I'm alive!"});
 * 
 *     // Listen for worker proxy messages
 *     workerPort.onmessage = function( event )
 *     {
 *         // Worker receives a message !
 *         // The `event.data` is what the worker proxy sends using `postMessage()`. Could be a String, Number or an Object type.
 *         // Here, `event.data` contains an object: `{type: String, says: String}`
 *         var message = event.data;
 *         switch( message.type )
 *         {
 *             // It's a hello world message
 *             case 'hello':
 *                 console.log( '[RECEIVED BY WORKER] '+ message.says );
 *                 // Reply to the worker proxy
 *                 workerPort.postMessage( {type: 'hello', says: 'Hello proxy!'} );
 *                 break;
 * 
 *             // It's a terminate message
 *             case 'close':
 *                 console.log( '[RECEIVED BY WORKER] '+ message.says );
 *                 // Reply to the worker proxy
 *                 workerPort.postMessage( {type: 'close', says: 'I will be back!'} );
 *                 // Close the worker
 *                 console.log( '[WORKER] Worker stops' );
 *                 close();
 *                 break;
 * 
 *             // It's something else. Skip it.
 *             default:
 *                 break;
 *         }
 *     }
 * }
 * ```
 * 
 * #### How to require a node module ?
 * The module should be defined in `PROJECT/node_modules`
 * 
 * ```javascript
 * var myModule = requireNode( 'myModule' );
 * ```
 * 
 * #### How to require a wakanda module ?
 * The module should be defined in `PROJECT/modules`
 * 
 * ```javascript
 * var myModule = require( 'myModule' );
 * ```
 *  
 * ### Step 2: Create the node worker thread and get the worker proxy
 * 
 * ```javascript
 * // PROJECT/proxy.js
 * // Create a new NodeWorker and get the proxy worker
 * var myWorkerProxy = new NodeWorker( 'backend/worker.js', 'my-worker-name' );
 * // Get the proxy worker port for communication
 * var workerProxyPort = myWorkerProxy.port;
 * // Send a "hello" message to the worker
 * workerProxyPort.postMessage( {type: 'hello', says: 'Hello worker !'} );
 * ```
 * 
 * ### Step 3: Listen for node worker messages
 * 
 * ```javascript
 * // PROJECT/proxy.js
 * // Listen for worker thread messages
 * workerProxyPort.onmessage = function( event )
 * {
 *     // Proxy receives a message !
 *     // Same as before, the `event.data` is what the worker proxy sends using `postMessage()`. Could be a String, Number or an Object type.
 *     // Here, `event.data` contains an object: `{type: String, says: String}`
 *     var message = event.data;
 *     switch( message.type )
 *     {
 *         // It's a hello world message
 *         case 'hello':
 *             console.log( '[RECEIVED BY PROXY] '+ message.says );
 *             // Say by to the worker
 *             workerProxyPort.postMessage( {type: 'close', says: 'Bye bye worker!'} );
 *             break;
 * 
 *         // It's a terminate message
 *         case 'close':
 *             console.log( '[RECEIVED BY PROXY] '+ message.says );
 *             exitWait();
 * 
 *         // It's something else. Skip it.
 *         default:
 *             break;
 *     }
 * }
 * wait();
 * ```
 */

interface NodeWorker {
    /**
     * Node worker constructor.
     * Creates a new node worker in its own thread if it does not exist yet. Then it returns a proxy object to communicate with the node worker thread.
     * Node workers can be addressed from any thread, they are uniquely identified by their path and name.
     * 
     * ```javascript
     * // "worker.js" is defined in PROJECT/worker.js
     * var myWorkerProxy = new NodeWorker( 'backend/worker.js', 'my-worker-name' );
     * ```
     * 
     * @param scriptPath Describes the path to worker javaScript file
     * @param workerName Describes the worker name
     * @returns Returns a node worker proxy
     */
    new (scriptPath: String, workerName?: String): WAKNodeWorkerProxy;
}

interface WAKNodeWorkerProxy {
    /**
     * Use the proxy port to communicate with the node worker thread.
     * 
     * ```javascript
     * // Create a new NodeWorker and get the proxy worker
     * var myWorkerProxy = new NodeWorker( 'backend/worker.js', 'my-worker-name' );
     * // Get the proxy worker port for communication
     * var workerProxyPort = myWorkerProxy.port;
     * // Send a "wake up" message to the worker
     * workerProxyPort.postMessage( 'wake-up' );
     * ```
     */
    port: Port;
}interface Port {

    /**
     * Listen for worker or proxy worker errors.
     * 
     * ```javascript
     * workerPort.onerror = function( error )
     * {
     *    // We've got an error !
     *    console.log('Error message: '+ error.message);
     *    console.log('From file: '+ error.filename);
     *    console.log('Line: '+ error.lineno);
     * }
     * ```
     * 
     * @param error Error received on the port
     */
    onerror(error: Object): void;

    /**
     * Listen for worker or proxy worker messages.
     * 
     * ```javascript
     * workerPort.onmessage = function( message )
     * {
     *     // We've got a message !
     *     // The `message.data` is what the worker proxy sends using `postMessage()`. Could be a String, Number or an Object type.
     *     // Here, `message.data` contains an object: `{type: String, says: String}`
     *     var action = message.data;
     *     switch( action.type )
     *     {
     *         // It's a hello world message
     *         case 'hello':
     *             // Reply to the worker proxy
     *             workerPort.postMessage( {type: 'hello', says: 'Hello to you too!'} );
     *             break;
     * 
     *         // It's a terminate message
     *         case 'close':
     *             // Reply to the worker proxy
     *             workerPort.postMessage( {type: 'close', says: 'I will be back!'} );
     *             // Close the worker
     *             close();
     *             break;
     *     }
     * }
     * ```
     * 
     * @param message Message received on the port
     */
    onmessage(message: any): void;

    /**
     * Send a message to the worker or proxy worker.
     * 
     * #### Example 1: From a worker proxy
     * ```javascript
     * // Create a new SharedWorker and get the proxy worker
     * var myProxyWorker = new SharedWorker("backend/worker.js", "my-worker-name");
     * // Get the proxy worker port for communication
     * var proxyWorkerPort = myProxyWorker.port;
     * // Send a "wake up" message to the worker
     * proxyWorkerPort.postMessage('wake-up');
     * ```
     * 
     * #### Example 2: From a worker
     * ```javascript
     * // worker.js
     * onconnect = function( msg )
     * {
     *     // Get the worker port for communication with the worker proxy
     *     var workerPort = msg.ports[0];
     * 
     *     // Send a message to the worker proxy. The worker is up and running.
     *     workerPort.postMessage({type: 'connected', says: 'Hello world!'});
     * }
     * ```
     * 
     * @param messageData Message to send to the worker
     */
    postMessage(messageData: any): void;
}
	interface ProgressIndicator {
		/**
		*stops the current session of the ProgressIndicator object
		*/
		endSession() : void;
		/**
		*automatically increments the value of the current element for the ProgressIndicator object
		*/
		incValue() : Boolean;
		/**
		*dynamically modifies the maximum number of elements whose processing must be shown by the ProgressIndicator object
		*/
		setMax(numElements: Number) : void;
		/**
		*dynamically modifies the name of the execution session for the ProgressIndicator object
		*/
		setMessage(sessionName: String) : void;
		/**
		*sets a current element value for the ProgressIndicator object
		*/
		setValue(curValue: Number) : Boolean;
		/**
		*interrupts the current execution session of the ProgressIndicator object
		*/
		stop() : void;
		/**
		*creates and manages the display of a second ProgressIndicator object in the main ProgressIndicator session being executed
		*/
		subSession(numElements: Number, sessionName: String, stoppable?: Boolean) : void;
		/**
		*creates and manages the display of a second ProgressIndicator object in the main ProgressIndicator session being executed
		*/
		subSession(numElements: Number, sessionName: String, stoppable?: String) : void;
	}

/**
 * ### Shared worker
 * 
 * A shared worker is composed of 2 elements:
 * - A thread running the shared worker
 * - One or more proxies communicating with the worker thread
 * 
 * ### Step 1: Define the shared worker
 * 
 * ```javascript
 * // PROJECT/worker.js
 * // onconnect is called everytime a new worker proxy is created
 * onconnect = function( event )
 * {
 *     // Get the worker port for communication with the worker proxy
 *     // Always use `ports[0]`
 *     var workerPort = event.ports[0];
 * 
 *     // Send a message to the worker proxy. The worker is up and running.
 *     workerPort.postMessage({type: 'connected', says: "I'm alive!"});
 * 
 *     // Listen for worker proxy messages
 *     workerPort.onmessage = function( event )
 *     {
 *         // Worker receives a message !
 *         // The `event.data` is what the worker proxy sends using `postMessage()`. Could be a String, Number or an Object type.
 *         // Here, `event.data` contains an object: `{type: String, says: String}`
 *         var message = event.data;
 *         switch( message.type )
 *         {
 *             // It's a hello world message
 *             case 'hello':
 *                 console.log( '[RECEIVED BY WORKER] '+ message.says );
 *                 // Reply to the worker proxy
 *                 workerPort.postMessage( {type: 'hello', says: 'Hello proxy!'} );
 *                 break;
 * 
 *             // It's a terminate message
 *             case 'close':
 *                 console.log( '[RECEIVED BY WORKER] '+ message.says );
 *                 // Reply to the worker proxy
 *                 workerPort.postMessage( {type: 'close', says: 'I will be back!'} );
 *                 // Close the worker
 *                 console.log( '[WORKER] Worker stops' );
 *                 close();
 *                 break;
 * 
 *             // It's something else. Skip it.
 *             default:
 *                 break;
 *     }
 * }
 * ```
 * 
 * #### How to require a wakanda module ?
 * The module should be defined in `PROJECT/modules`
 * 
 * ```javascript
 * var myModule = require( 'myModule' );
 * ```
 * 
 * ### Step 2: Create the shared worker thread and get the worker proxy
 * 
 * ```javascript
 * // PROJECT/proxy.js
 * // Create a new SharedWorker and get the proxy worker
 * var myWorkerProxy = new SharedWorker( 'backend/worker.js', 'my-worker-name' );
 * // Get the proxy worker port for communication
 * var workerProxyPort = myWorkerProxy.port;
 * // Send a "hello" message to the worker
 * workerProxyPort.postMessage( {type: 'hello', says: 'Hello worker !'} );
 * ```
 * 
 * ### Step 3: Listen for shared worker messages
 * 
 * ```javascript
 * // PROJECT/proxy.js
 * // Listen for worker thread messages
 * workerProxyPort.onmessage = function( event )
 * {
 *     // Proxy receives a message !
 *     // Same as before, the `event.data` is what the worker proxy sends using `postMessage()`. Could be a String, Number or an Object type.
 *     // Here, `event.data` contains an object: `{type: String, says: String}`
 *     var message = event.data;
 *     switch( message.type )
 *     {
 *         // It's a hello world message
 *         case 'hello':
 *             console.log( '[RECEIVED BY PROXY] '+ message.says );
 *             // Say by to the worker
 *             workerProxyPort.postMessage( {type: 'close', says: 'Bye bye worker!'} );
 *             break;
 * 
 *         // It's a terminate message
 *         case 'close':
 *             console.log( '[RECEIVED BY PROXY] '+ message.says );
 *             exitWait();
 * 
 *         // It's something else. Skip it.
 *         default:
 *             break;
 *     }
 * }
 * wait();
 * ```

 */

interface SharedWorker {
    /**
     * Shared worker constructor.
     * Creates a new shared worker in its own thread if it does not exist yet. Then it returns a proxy object to communicate with the shared worker thread.
     * Shared workers can be addressed from any thread, they are uniquely identified by their path and name.
     * 
     * ```javascript
     * // "worker.js" is defined in PROJECT/worker.js
     * var myWorkerProxy = new SharedWorker( 'backend/worker.js', 'my-worker-name' );
     * ```
     * 
     * @param scriptPath Describes the path to worker javaScript file
     * @param workerName Describes the worker name
     * @returns Returns a shared worker proxy
     */
    new (scriptPath: String, workerName?: String): WAKSharedWorkerProxy;
}

interface WAKSharedWorkerProxy {
    /**
     * Use the proxy port to communicate with the share worker thread.
     * 
     * ```javascript
     * // Create a new SharedWorker and get the proxy worker
     * var myWorkerProxy = new SharedWorker( 'backend/worker.js', 'my-worker-name' );
     * // Get the proxy worker port for communication
     * var workerProxyPort = myWorkerProxy.port;
     * // Send a "wake up" message to the worker
     * workerProxyPort.postMessage( 'wake-up' );
     * ```
     */
    port: Port;
}		
	interface Socket {
		/**
		*Number of buffered characters to be written
		*/
		bufferSize: Number;
		/**
		*installs a new listener function to be called when the specified event is triggered by the object on which it is applied
		*/
		addListener(event: String, listener: Function) : void;
		/**
		*returns an object containing two attributes, address and port, representing the address where the client socket is connected
		*/
		address() : Object;
		/**
		*opens the connection for the existing socket to which it is applied
		*/
		connect(port: Number, host?: String, callback?: Function) : void;
		/**
		*closes the socket to which it is applied
		*/
		destroy() : void;
		/**
		*triggers the event for the object, optionally passing arguments to the listener(s)
		*/
		emit(event: String, ...args: any[]) : void;
		/**
		*closes the socket to which it is applied
		*/
		end() : void;
		/**
		*returns an array of listeners defined for the specified event in the object
		*/
		listeners(event: String) : Array<Function>;
		/**
		*installs a new listener function to be called when the specified event is triggered by the object on which it is applied
		*/
		on(event: String, listener: Function) : void;
		/**
		*sets a new listener function to be called only once when the specified event is triggered for the first time by the object on which it is applied
		*/
		once(event: String, listener: Function) : void;
		/**
		*pauses the 'data' event triggered for the given socket
		*/
		pause() : void;
		/**
		*removes all the listeners of the specified event for the object to which it is applied
		*/
		removeAllListeners(event?: String) : void;
		/**
		*removes the specified listener from the listener array of the event for the object to which it is applied
		*/
		removeListener(event: String, listener: Function) : void;
		/**
		*resumes a paused socket
		*/
		resume() : void;
		/**
		*sets the encoding for data received from the socket to which it is applied
		*/
		setEncoding(encoding: String) : void;
		/**
		*defines the maximum number of listeners that can be added per event for the object to which it is applied
		*/
		setMaxListeners(maxValue: Number) : void;
		/**
		*disables Nagle's algorithm for the socket to which it is applied
		*/
		setNoDelay(noDelay: Boolean) : void;
		/**
		*writes data to the socket to which it is applied
		*/
		write(data: WAKBufferInstance, encoding?: String) : Boolean;
		/**
		*writes data to the socket to which it is applied
		*/
		write(data: String, encoding?: String) : Boolean;
	}interface SocketSync {
		/**
		*returns an object containing two attributes, address and port, representing the address where the client SocketSync is connected
		*/
		address() : Object;
		/**
		*opens the connection for the existing SocketSync to which it is applied
		*/
		connect(port: Number, host?: String) : void;
		/**
		*closes the SocketSync method to which it is applied
		*/
		destroy() : void;
		/**
		*closes the SocketSync to which it is applied
		*/
		end() : void;
		/**
		*returns in a Buffer object the data read from the SocketSync instance to which it is applied
		*/
		read(timeOut?: Number) : WAKBufferInstance;
		/**
		*sets the encoding for data received from the SocketSync to which it is applied
		*/
		setEncoding(encoding: String) : void;
		/**
		*disables Nagle's algorithm for the SocketSync to which it is applied
		*/
		setNoDelay(noDelay: Boolean) : void;
		/**
		*writes data to the SocketSync to which it is applied
		*/
		write(data: String, encoding: String) : Boolean;
		/**
		*writes data to the SocketSync to which it is applied
		*/
		write(data: WAKBufferInstance, encoding: String) : Boolean;
	}


interface SystemWorker {
    /**
     * Calls a system worker (asynchronous mode).
     * Use the system worker proxy to get the result.
     * 
     * #### Example 1: Do a simple CLI command
     * ```javascript
     * var workerProxy = new SystemWorker( 'sh -c ls -la /Users/<user>/Desktop' );
     * workerProxy.onerror = function ( event ) {      
     *     console.log( event.type +': '+ event.data );
     * }
     * workerProxy.onmessage = function ( message ) {      
     *     console.log( event.type +': '+ event.data );
     * }
     * workerProxy.onterminated = function ( event ) {
     *     console.log( event.type +': with exitStatus:'+ event.exitStatus );
     * }
     * // For testing purpose, wait for the worker to end. This makes it very similar to SystemWorker.exec().
     * // In real application, keep working in parallels and do not pause the current thread
     * workerProxy.wait();
     * ```
     * 
     * #### Example 2: Pass parameters, quotes and env variables options to the system worker
     * ```javascript
     * var myFolder = new Folder( 'PROJECT' );
     * var options = {
     *     parameters : { folder_ref : myFolder },
     *     quote : '"',
     *     variables : { ENV_VAR_1 : 'value1' }
     * };
     * var workerProxy = new SystemWorker( 'sh -c ls -la {file_ref}', options);
     * ```
     * 
     * @warning The system worker can only launch executable applications. All shell instructions must be preceded by a command line interpreter like `bash`, `sh` or `cmd` depending of the OS.
     * @param cli Command line to execute
     * @param options Describes command line options
     * @returns Returns a system worker proxy
     */
    new (cli: String, options?: WAKSystemWorkerOptions): WAKSystemWorkerProxy;
    /**
     * Calls a system worker (asynchronous mode).
     * Use the system worker proxy to get the result.
     * 
     * #### Example 1: Do a simple CLI command
     * ```javascript
     * var workerProxy = new SystemWorker( ['sh', '-c', 'ls -la /Users/<user>/Desktop'] );
     * workerProxy.onerror = function ( event ) {      
     *     console.log( event.type +': '+ event.data );
     * }
     * workerProxy.onmessage = function ( message ) {      
     *     console.log( event.type +': '+ event.data );
     * }
     * workerProxy.onterminated = function ( event ) {
     *     console.log( event.type +': with exitStatus:'+ event.exitStatus );
     * }
     * // For testing purpose, wait for the worker to end. This makes it very similar to SystemWorker.exec().
     * // In real application, keep working in parallels and do not pause the current thread
     * workerProxy.wait();
     * ```
     * 
     * #### Example 2: Pass parameters, quotes and env variables options to the system worker
     * ```javascript
     * var myFolder = new Folder( 'PROJECT' );
     * var options = {
     *     parameters : { folder_ref : myFolder },
     *     quote : '"',
     *     variables : { ENV_VAR_1 : 'value1' }
     * };
     * var workerProxy = new SystemWorker( ['sh', '-c', 'ls -la {file_ref}'], options);
     * ```
     * 
     * @warning The system worker can only launch executable applications. All shell instructions must be preceded by a command line interpreter like `bash`, `sh` or `cmd` depending of the OS.
     * @param cli Command line to execute
     * @param options Describes command line options
     * @returns Returns a system worker proxy
     */
    new (cli: String[], options?: WAKSystemWorkerOptions): WAKSystemWorkerProxy;
    /**
     * Calls a system worker (asynchronous mode).
     * Use the system worker proxy to get the result.
     * 
     * #### Example 1: Do a simple CLI command
     * ```javascript
     * // Launch "sh" executable with "-c" parameter and "ls -la /Users/<user>/Desktop" as the action to do
     * var workerResult = SystemWorker.exec( 'sh -c ls -la /Users/<user>/Desktop' );
     * console.log(workerResult.output.toString());
     * ```
     * 
     * #### Example 2: Get the result and display the ouput
     * ```javascript
     * // Launch "git" executable with "--version" parameter
     * // Store the result (Buffer) in a variable
     * var workerResult = SystemWorker.exec( 'git --version' );
     * console.log(workerResult.output.toString());
     * ```
     * 
     * #### Example 3: Pass root folder options to the system worker
     * ```javascript
     * var options = { folder: '/Users/yann/Desktop' };
     * var workerResult = SystemWorker.exec( 'sh -c ls -la', options);
     * console.log(workerResult.output.toString());
     * ```
     * 
     * #### Example 4: Pass parameters, quotes and env variables options to the system worker
     * ```javascript
     * var myFolder = new Folder( 'PROJECT' );
     * var options = {
     *     parameters : { folder_ref : myFolder },
     *     quote : '"',
     *     variables : { ENV_VAR_1 : 'value1' }
     * };
     * var workerResult = SystemWorker.exec( 'sh -c ls -la {file_ref}', options);
     * console.log(workerResult.output.toString());
     * ```
     * 
     * @warning The system worker can only launch executable applications. All shell instructions must be preceded by a command line interpreter like `bash`, `sh` or `cmd` depending of the OS.
     * @param cli Command line to execute
     * @param options Describes command line options
     * @returns Returns the exit status, stdout and sterr
     */
    exec(cli: String, options?: WAKSystemWorkerOptions): WAKSystemWorkerResult;
    /**
     * Calls to system worker and waits for its response (synchronous mode).
     * 
     * #### Example 1: Do a simple CLI command
     * ```javascript
     * // Launch "sh" executable with "-c" parameter and "ls -la /Users/<user>/Desktop" as the action to do
     * var workerResult = SystemWorker.exec( ['sh', '-c', 'ls -la /Users/<user>/Desktop'] );
     * console.log(workerResult.output.toString());
     * ```
     * 
     * #### Example 2: Get the result and display the ouput
     * ```javascript
     * // Launch "git" executable with "--version" parameter
     * // Store the result (Buffer) in a variable
     * var workerResult = SystemWorker.exec( ['git', '--version'] );
     * console.log(workerResult.output.toString());
     * ```
     * 
     * #### Example 3: Pass root folder options to the system worker
     * ```javascript
     * var options = { folder: '/Users/yann/Desktop' };
     * var workerResult = SystemWorker.exec( ['sh', '-c', 'ls -la'], options);
     * console.log(workerResult.output.toString());
     * ```
     * 
     * #### Example 4: Pass parameters, quotes and env variables options to the system worker
     * ```javascript
     * var myFolder = new Folder( 'PROJECT' );
     * var options = {
     *     parameters : { folder_ref : myFolder },
     *     quote : '"',
     *     variables : { ENV_VAR_1 : 'value1' }
     * };
     * var workerResult = SystemWorker.exec( ['sh', '-c', 'ls -la {file_ref}'], options);
     * console.log(workerResult.output.toString());
     * ```
     * 
     * @warning The system worker can only launch executable applications. All shell instructions must be preceded by a command line interpreter like `bash`, `sh` or `cmd` depending of the OS.
     * @param cli Command line to execute. First element is the executable. Then all next elements describe the parameters
     * @param options Describes command line options
     * @returns Returns the exit status, stdout and sterr
     */
    exec(cli: String[], options?: WAKSystemWorkerOptions): WAKSystemWorkerResult;
}

interface WAKSystemWorkerOptions {
    /**
     * Root folder for the worker executable. Native relative file paths will be resolved with this folder as parent.
     */
    folder?: String | WAKFolderInstance;
    /**
     * Passes named parameters to command line. `{name}` is replaced with the value of the `options.parameters.name` attribute. Parameters can be of type String, Number, File or Folder.
     */
    parameters?: Object;
    /**
     * Escapes character (can be an empty string). Named parameters may need to be escaped depending on the system worker and OS on which it is executed.
     */
    quote?: String;
    /**
     * String data to pass to system worker.
     */
    stdin?: String;
    /**
     * Defines custom environment variables for the system worker.
     */
    variables?: Object;
    /**
     * (default: `false`) `true` to terminate the process tree started by the system worker once terminated, `false` otherwise.
     */
    kill_process_tree?: Boolean;
}

interface WAKSystemWorkerResult {
    /**
     * Integer value depending on the executable. If the executable considers the operation has been executed successfully, exitStatus value is `0`.
     */
    exitStatus: Number;
    /**
     * stdout result of the command.
     */
    ouput: WAKBufferInstance;
    /**
     * stderr result of the command.
     */
    error: WAKBufferInstance;
}

interface WAKSystemWorkerEvent {
    /**
     * Either `message`, `error` or `terminate`.
     */
    type: String;
    /**
     * SystemWorker proxy which triggered the callback.
     */
    target: WAKSystemWorkerProxy;
    /**
     * Content of stdout.
     */
    data?: String | WAKBufferInstance;
    /**
     * `true` if the command line has been correctly executed.
     */
    hasStarted?: Boolean;
    /**
     * Exit status returned by the executed command.
     */
    exitStatus?: Number;
    /**
     * `true` if the user called `terminate()`.
     */
    forced?: Boolean;
}

interface WAKSystemWorkerProxy {
    /**
     * Callback for system worker errors.
     * 
     *```javascript
     * // Receives an error
     * workerProxy.onerror = function ( event ) {      
     *     console.log( event.type +': '+ event.data );
     * }
     *```
     */
    onerror: (event: WAKSystemWorkerEvent) => void;
    /**
     * Callback for system worker messages.
     * The message can be sent into multiple chunks.
     *
     *```javascript
     * // Receives a message chunck
     * workerProxy.onmessage = function ( event ) {      
     *     console.log( event.type +': '+ event.data );
     * }
     *```
     */
    onmessage: (event: WAKSystemWorkerEvent) => void;
    /**
     * Callback when the external process is terminating.
     * 
     * ```javascript
     * // Receives an "end" event from system worker
     * workerProxy.onterminated = function ( event ) {
     *     console.log( event.type +': with exitStatus:'+ event.exitStatus );
     * }
     * ```
     */
    onterminated: (event: WAKSystemWorkerEvent) => void;
    /**
     * Closes the input stream (stdin) of the external process. 
     * Useful when an attempt to write in the stdin of the external process with `postMessage()` is stuck. `endOfInput()` will release the execution.
     * 
     * ```javascript
     * // Create some data to gzip
     * var input = new Buffer( 'abcde', 'ascii' );
     * // Create an asynchronous system worker
     * var worker = new SystemWorker( 'gzip' );
     * // Send the compressed file on stdin.
     * worker.postMessage( input );
     * // Note that we call endOfInput() to indicate we're done. gzip (and most program waiting data from stdin) will wait for more data until the input is explicitely closed.
     * worker.endOfInput();
     * ```
     */
    endOfInput(): void;
    /**
     * Returns system worker information.
     */
    getInfos(): Object;
    /**
     * Write on the input stream (stdin) of the external process.
     * 
     * ```javascript
     * // Create an asynchronous system worker
     * var worker = new SystemWorker( 'gzip' );
     * // Send the compressed file on stdin.
     * worker.postMessage( 'abcde' );
     * // Note that we call endOfInput() to indicate we're done. gzip (and most program waiting data from stdin) will wait for more data until the input is explicitely closed.
     * worker.endOfInput();
     * ```
     */
    postMessage(stdin: String): void;
    /**
     * Write on the input stream (stdin) of the external process.
     * 
     * ```javascript
     * // Create some data to gzip
     * var input = new Buffer( 'abcde', 'ascii' );
     * // Create an asynchronous system worker
     * var worker = new SystemWorker( 'gzip' );
     * // Send the compressed file on stdin.
     * worker.postMessage( input );
     * // Note that we call endOfInput() to indicate we're done. gzip (and most program waiting data from stdin) will wait for more data until the input is explicitely closed.
     * worker.endOfInput();
     * ```
     */
    postMessage(stdin: WAKBufferInstance): void;
    /**
     * Set the type of data exchanged in the SystemWorker through the onmessage and onerror properties.
     * 
     * ```javascript
     * workerProxy.setBinary(true);
     * ```
     * 
     * @param binary `true` to return binary data by `onmessage` and `onerror`, `false` otherwise.
     */
    setBinary(binary: Boolean): void;
    /**
     * Forces the system worker to terminate its execution.
     * 
     * ```javascript
     * workerProxy.terminate();
     * workerProxy.terminate(true, true);
     * ```
     * 
     * @param waitForTermination (default: `false`) `true` if the current thread must wait for the system worker execution to end
     * @param killProcessTree (default: `false`) `true` if the system worker and all his childs must end
     */
    terminate(waitForTermination?: Boolean, killProcessTree?: Boolean): void;
    /**
     * Wait for the end of the system worker execution.
     * 
     * ```javascript
     * workerProxy.wait(1000);
     * workerProxy.wait();
     * ```
     * 
     * @param timeout Millisecond to wait for.
    */
    wait(timeout?: Number): Boolean;
}



interface TextStream {
    /**
     * Creates a textStream.
     * 
     * ```javascript
     * // The file does not have to exist
     * var myStream = new TextStream( 'PROJECT/my-streamed-file.js', 'write' );
     * // Creates the file if it does not exist
     * myStream.write( 'Hello '+ Date.now() +' !\n' );
     * // Important to close the stream every time.
     * myStream.close();
     * ```
     * 
     * @param file Binary text file to reference. The file does not to exist
     * @param mode Opens a stream in `Write`, `Read` or `Overwrite` mode
     * @param charset (default: 7) Character set of the text. See more details on [charset](http://doc.wakanda.org/home2.en.html#/Files-and-Folders/TextStream/TextStream.301-684310.en.html)
     */
    new (file: String, mode: String, charset?: Number): WAKTextStreamInstance;
    /**
     * Creates a textStream.
     * 
     * ```javascript
     * // The file does not have to exist
     * var myFile = new File( 'PROJECT/my-streamed-file.js' );
     * var myStream = new TextStream( file, 'write' );
     * // Creates the file if it does not exist
     * myStream.write( 'Hello '+ Date.now() +' !\n' );
     * // Important to close the stream every time.
     * myStream.close();
     * ```
     * 
     * @param file Binary text file to reference. The file does not to exist
     * @param mode Opens a stream in `Write`, `Read` or `Overwrite` mode
     * @param charset (default: 7) Character set of the text. See more details on [charset](http://doc.wakanda.org/home2.en.html#/Files-and-Folders/TextStream/TextStream.301-684310.en.html)
     */
    new (file: WAKFileInstance, mode: String, charset?: Number): WAKTextStreamInstance;
}

interface WAKTextStreamInstance {
    /**
     * Closes the file referenced in the TextStream object.
     * 
     * ```javascript
     * var myFile = new File( 'PROJECT/my-streamed-file.js' );
     * var myStream = new TextStream( file, 'write' );
     * myStream.write( 'Hello '+ Date.now() +' !\n' );
     * // Important to close the stream every time.
     * myStream.close();
     * ```
     */
    close(): void;
    /**
     * Checks if the the cursor position is after the last character of the file referenced in the TextStream object.
     * 
     * ```javascript
     * var myStream = new TextStream( 'PROJECT/bootstrap.js', 'Read' );
     * // Is end of file reached ?
     * while( !myStream.end() ){
     *     console.log( myStream.read( 10 ) );
     * }
     * // Important to close the stream every time.
     * myStream.close();
     * ```
     * 
     * @returns `true` if the cursor position is at the end of file, `false` otherwise.
     */
    end(): Boolean;
    /**
     * Saves the contents of the TextStream buffer to the disk file.
     */
    flush(): void;
    /**
     * Get the current cursor position in the text stream.
     * 
     * ```javascript
     * var myStream = new TextStream( 'PROJECT/bootstrap.js', 'Read' );
     * while( !myStream.end() ){
     *     myStream.read( 10 );
     *     console.log( myStream.getPos() );
     *     // 10, 20, 30, ...
     * }
     * // Important to close the stream every time.
     * myStream.close();
     * ```
     */
    getPos(): Number;
    /**
     * Get the current text stream size.
     * 
     * ```javascript
     * var myStream = new TextStream( 'PROJECT/bootstrap.js', 'Read' );
     * console.log( myStream.getSize() );
     * // 183
     * // Important to close the stream every time.
     * myStream.close();
     * ```
     */
    getSize(): Number;
    /**
     * Reads bytes from the text stream.
     * 
     * ```javascript
     * var myStream = new TextStream( 'PROJECT/bootstrap.js', 'Read' );
     * while( !myStream.end() ){
     *     // Read the next 10 bytes and moves the cursor position accordingly
     *     console.log( myStream.read( 10 ) );
     * }
     * // Important to close the stream every time.
     * myStream.close();
     * ```
     * 
     * @param nbBytes (default: `TextStream.getSize()`) Number of bytes to read
     */
    read(nbBytes?: Number): String;
    /**
     * Set the cursor position to the beginning of the TextStream.
     * 
     * ```javascript
     * var myStream = new TextStream( 'PROJECT/bootstrap.js', 'Read' );
     * console.log( 'Start: '+ myStream.getPos() );
     * myStream.read(20);
     * console.log( 'After read: '+ myStream.getPos() );
     * myStream.rewind();
     * console.log( 'After rewind: '+ myStream.getPos() );
     * // Important to close the stream every time.
     * myStream.close();
     * ```
     */
    rewind(): void;
    /**
     * Writes the text in the TextStream.
     * 
     * ```javascript
     * var myFile = new File( 'PROJECT/my-streamed-file.js' );
     * var myStream = new TextStream( file, 'write' );
     * myStream.write( 'Hello '+ Date.now() +' !\n' );
     * // Important to close the stream every time.
     * myStream.close();
     * ```
     * 
     * @param text String to write in the TextStream
     */
    write(text: String): void;
}


interface User {
    /**
     * Describes the user full name.
     */
    fullName: String;
    /**
     * Describes the internal user ID.
     */
    ID: String;
    /**
     * Describe the user name.
     */
    name: String;
    /**
     * Defines the user storage object.
     * This object is maintained as long as the server is alive. It is not stored after the server shuts down. This property is user-related and not session-related.
     * 
     * ```javascript
     * directory.currentUser.storage.setItem( 'itemInBox', 19 );
     * var result = directory.currentUser.storage.getItem( 'itemInBox' );
     * console.log(result);
     * // 19
     * ```
     */
    storage: LockableKeyValueStorage;
    /**
     * Get all groups where the user belongs to.
     * @param level (default: `false`) Set to `true` if you want first level results. Set to `false` otherwise.
     * @returns Returns an array of group
     */
    getParents(level?: Boolean): Array<Group>;
    /**
     * Assignes a user to one or more groups.
     * 
     * ```javascript
     * myUser.putInto( 'sales', 'finance' );
     * ```
     * 
     * @warning All updates done to the `directory` are temporary. Use `directory.save()` to save all updates on disk.
     * @param groupList Describes an array of group name
     */
    putInto(...groupList: String[]): void;
    /**
     * Assignes a user to one or more groups.
     * 
     * ```javascript
     * var group1 = directory.group( 'finance' ); 
     * var group2 = directory.addGroup( 'account' );
      * myUser.putInto( group1 , group2 )
     * ```
     * 
     * @warning All updates done to the `directory` are temporary. Use `directory.save()` to save all updates on disk.
     * @param groupList Describes an array of group object
     */
    putInto(...groupList: Group[]): void;
    /**
     * Removes the user from the directory.
     * @warning All updates done to the `directory` are temporary. Use `directory.save()` to save all updates on disk.
     */
    remove(): void;
    /**
     * Removes the user from group list.
     * 
     * ```javascript
     * myUser.removeFrom( 'sales', 'finance' );
     * ```
     * 
     * @warning All updates done to the `directory` are temporary. Use `directory.save()` to save all updates on disk.
     * @param groupList Describes an array of group name
     */
    removeFrom(...groupList: String[]): void;
    /**
     * Removes the user from group list.
     * 
     * ```javascript
     * var group1 = directory.group( 'finance' ); 
     * var group2 = directory.addGroup( 'account' );
     * myUser.removeFrom( group1 , group2 )
     * ```
     * 
     * @warning All updates done to the `directory` are temporary. Use `directory.save()` to save all updates on disk.
     * @param groupList Describes an array of group object
     */
    removeFrom(...groupList: Group[]): void;
    /**
     * Update the user password in the directory.
     * @warning All updates done to the `directory` are temporary. Use `directory.save()` to save all updates on disk.
     * @param password The new password to save
     */
    setPassword(password: String): void;
}

interface XMLHttpRequest {
    /**
     * Creates a XMLHttpRequest (XHR).
     * 
     * ```javascript
     * var xhr = new XMLHttpRequest();
     * 
     * // XHR event handler. 
     * xhr.onreadystatechange = function() {
     * 
     *     // Get xhr states
     *     var state = this.readyState;
     *
     *     // Only consider the "done" state. Skip others
     *     if (state !== 4) { 
     *         return;
     *     }
     *
     *     // Get xhr response headers
     *     var headers = this.getAllResponseHeaders();
     *
     *     // Get xhr response text contents
     *     var result = this.responseText;
     *
     *     // Display the result when received
     *     console.log( result );
     * };
     * 
     * // Get server rest info
     * // Synchronous xhr request
     * xhr.open( 'GET', 'http://127.0.0.1:8081/rest/$info' );
     * 
     * // Send the XHR request
     * xhr.send();
     * ```
     * 
     * @warning Sends synchronous XHR request.
     * @param proxy `{host: String, port: Number}` Overrides the system proxy settings
     */
    new (proxy?: Object): XMLHttpRequest;
    /**
     * Current state of the request.
     * See [doc center](http://doc.wakanda.org/home2.en.html#/Wakanda Studio/0.Beta/readyState.303-867831.en.html) for more details about xhr states.
     */
    readonly readyState: number;
    /**
     * Response body part (other than text).
     */
    readonly response: any;
    /**
     * Text response entity body.
     */
    readonly responseText: string;
    /**
     * Data type of the response ("text" or "blob").
     */
    responseType: string;
    /**
     * HTTP status code of the response.
     */
    readonly status: number;
    /**
     * HTTP status text of the response.
     */
    readonly statusText: string;
    /**
     * Defines the event listener function that will handle the various states of the XMLHttpRequest.
     * See [doc center](http://doc.wakanda.org/home2.en.html#/Wakanda Studio/0.Beta/readyState.303-867831.en.html) for more details about xhr states.
     */
    onreadystatechange: (this: XMLHttpRequest, event: Event) => any;
    /**
     * Returns all HTTP headers from the response of the XMLHttprequest.
     */
    getAllResponseHeaders(): String;
    /**
     * Returns the value of a specific header field in the response of the XMLHttpRequest.
     */
    getResponseHeader(header: String): String;
    /**
     * Declares the HTTP method and the URL of the XMLHttpRequest.
     * @param method HTTP method
     * @param url URL of the request
     */
    open(method: String, url: String): void;
    /**
     * Sends the XHR opened request.
     * 
     * #### Example 1: Basic usage
     * ```javascript
     * var xhr = new XMLHttpRequest();
     * xhr.open( 'GET', 'http://127.0.0.1:8081/rest/$info' );
     * xhr.send();
     * ```
     * 
     * #### Example 2: Upload file
     * See [doc center](http://doc.wakanda.org/home2.en.html#/HTTP-REST/Interacting-with-the-Server/upload.303-1158401.en.html) for more details about upload
     * ```javascript
     * var xhr = new XMLHttpRequest();
     * xhr.open('PUT', 'http://127.0.0.1:8081/rest/$upload?$rawPict=true');
     * xhr.setRequestHeader( 'Content-Type', 'image/jpeg' );
     * xhr.onreadystatechange = function() {
     *     if (this.readyState !== 4) { 
     *         return;
     *     }
     *     // Displays the upload result ID to use as reference in Wakanda DB
     *     console.log( 'Upload ID:'+ xhr.responseText );
     * }
     * xhr.send( 'PROJECT/my-image.jpg' );
     * ```
     * 
     * @warning Sends synchronous XHR request.
     * @param data Data to send in the request `body`
     */
    send(data?: String): void;
    /**
     * Sends the XHR opened request.
     * 
     * #### Example 1: Basic usage
     * ```javascript
     * var xhr = new XMLHttpRequest();
     * xhr.open( 'GET', 'http://127.0.0.1:8081/rest/$info' );
     * xhr.send();
     * ```
     * 
     * #### Example 2: Upload file
     * See [doc center](http://doc.wakanda.org/home2.en.html#/HTTP-REST/Interacting-with-the-Server/upload.303-1158401.en.html) for more details about upload
     * ```javascript
     * var myFile = new File( 'PROJECT/my-image.jpg' );
     * var xhr = new XMLHttpRequest();
     * xhr.open('PUT', 'http://127.0.0.1:8081/rest/$upload?$rawPict=true');
     * xhr.setRequestHeader( 'Content-Type', 'image/jpeg' );
     * xhr.onreadystatechange = function() {
     *     if (this.readyState !== 4) { 
     *         return;
     *     }
     *     // Displays the upload result ID to use as reference in Wakanda DB
     *     console.log( 'Upload ID:'+ xhr.responseText );
     * }
     * xhr.send( myFile );
     * ```
     * 
     * @warning Sends synchronous XHR request.
     * @param data Data to send in the request `body`
     */
    send(data?: WAKFileInstance | WAKBlobInstance | WAKBufferInstance ): void;
    /**
     * Allows the request to be authenticated on the remote server with a client certificate, when necessary.
     * @param keyPath Path to the PEM format private key
     * @param certificatePath Path to the local PEM format certificate
     */
    setClientCertificate(keyPath: String, certificatePath: String): void;
    /**
     * Set the value of a specific header field of the XMLHttpRequest.
     * 
     * ```javascript
     * var xhr = new XMLHttpRequest();
     * xhr.open('GET', 'http://127.0.0.1:8081/rest/$info');
     * xhr.setRequestHeader('X-Test', 'one');
     * xhr.setRequestHeader('X-Test', 'two');
     * xhr.send();
     * ```
     * 
     * @param header The header field name
     * @param value The header field value
     */
    setRequestHeader(header: String, value: String): void;
}
